package com.manbai.jaldirummy;

import android.Manifest;
import android.app.Activity;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.RemoteException;
import android.os.Vibrator;
import android.util.Base64;
import android.util.Log;
import android.view.KeyEvent;
import android.view.WindowManager;
import android.widget.Toast;

import androidx.core.app.ActivityCompat;

import com.airpay.airpaysdk_simplifiedotp.AirpayActivity;
import com.airpay.airpaysdk_simplifiedotp.AirpayConfiguration;
import com.airpay.airpaysdk_simplifiedotp.AirpayConfigurationParams;
import com.airpay.airpaysdk_simplifiedotp.Config;
import com.airpay.airpaysdk_simplifiedotp.utils.Transaction;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.android.installreferrer.api.InstallReferrerClient;
import com.android.installreferrer.api.InstallReferrerStateListener;
import com.android.installreferrer.api.ReferrerDetails;
import com.appsflyer.AppsFlyerLib;
import com.facebook.AccessToken;
import com.facebook.CallbackManager;
import com.facebook.FacebookCallback;
import com.facebook.FacebookException;
import com.facebook.FacebookSdk;
import com.facebook.login.LoginManager;
import com.facebook.login.LoginResult;
import com.facebook.share.widget.ShareDialog;
import com.flurry.android.FlurryAgent;
import com.flurry.android.FlurryPerformance;
import com.google.android.gms.auth.api.signin.GoogleSignIn;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInClient;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import com.google.android.gms.common.api.ApiException;
import com.google.android.gms.tasks.Task;
import com.google.gson.Gson;
import com.manbai.jaldirummy.Airpay.AirpayConfig;
import com.manbai.jaldirummy.GameUpdate.GameUpdateComponent;
import com.manbai.jaldirummy.GameUpdate.Global;
import com.manbai.jaldirummy.PhonePE.DeviceContext;
import com.manbai.jaldirummy.PhonePE.PaymentInstrument;
import com.manbai.jaldirummy.PhonePE.PhonePEConfig;
import com.phonepe.intent.sdk.api.B2BPGRequest;
import com.phonepe.intent.sdk.api.B2BPGRequestBuilder;
import com.phonepe.intent.sdk.api.PhonePe;
import com.phonepe.intent.sdk.api.PhonePeInitException;
import com.phonepe.intent.sdk.api.UPIApplicationInfo;

import org.egret.egretnativeandroid.EgretNativeAndroid;
import org.egret.runtime.launcherInterface.INativePlayer;

import java.io.File;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.zip.CRC32;


//Android项目发布设置详见doc目录下的README_ANDROID.md

public class MainActivity extends Activity {
    private static final int B2B_PG_REQUEST_CODE = 777;
    public final String appUrl = "https://play.google.com/store/apps/details?id=com.manbai.jaldirummy";
    public final String shareUrl = "https://play.google.com/store/apps/details?id=com.manbai.jaldirummy&referrer=userid=";
    public final String appFlyerDevKey = "CrgFwXRTJ4bdXpCM3pjW28";
    public final int channelCode = 1;//0-WEB,1-GOOGLE_PLAY
    public final int AIRPAY_REQUEST_CODE = 120;
    public final int PERMISSION_REQUEST_CODE = 101;
    public final int PERMISSION_CONTECT_REQUEST_CODE = 102;
    private final String TAG = "MainActivity";
    private final int RC_SIGN_IN = 2;
    String apiEndPoint = "/pg/v1/pay";
    ArrayList<String> UPI = new ArrayList<>(Arrays.asList("com.phonepe.app", "com.phonepe.app.preprod", "com.google.android.apps.nbu.paisa.user", "net.one97.paytm", "in.org.npci.upiapp"));
    String payUpiList1 = "";
    String payUpiList2 = "";
    ArrayList<Transaction> transactionList;
    HashMap<String, String> map = new HashMap<>();
    private String UUID = "";
    private String referrer = "";
    private EgretNativeAndroid nativeAndroid;
    private CallbackManager callbackManager;
    private GoogleSignInClient mGoogleSignInClient;
    private InstallReferrerClient referrerClient;
    private ShareDialog shareDialog;
    private final JSONArray upiList = new JSONArray();
    private String customer_vpa = "";
    private GameUpdateComponent guc;
    private String airpay_merchant_transaction_id = "";//这个是临时用的记录AIRPAY的支付ID，如果没有返回，或者返回错误，用这个来去服务端验证
    private int login_type = 0;//这个是临时记录登录模式的，用来确实是第三方登录还是绑定

    private static String byte2Hex(byte[] bytes) {
        StringBuilder stringBuilder = new StringBuilder();
        String temp;
        for (byte aByte : bytes) {
            temp = Integer.toHexString(aByte & 0xFF);
            if (temp.length() == 1) {
                //1得到一位的进行补0操作
                stringBuilder.append("0");
            }
            stringBuilder.append(temp);
        }
        return stringBuilder.toString();
    }

    /**
     * 根据签名文件获取散列密钥
     * 注意: 如果debug和release签名文件不一致,需要重新生成配置到Facebook
     */
    public static String getHashKey(Context context) {
        try {
            PackageInfo info = context.getPackageManager().getPackageInfo(context.getPackageName(), PackageManager.GET_SIGNATURES);
            for (android.content.pm.Signature signature : info.signatures) {
                MessageDigest md = MessageDigest.getInstance("SHA");
                md.update(signature.toByteArray());
                String KeyHash = Base64.encodeToString(md.digest(), Base64.DEFAULT);
                Log.e("HashKey:", KeyHash);// 打印出来的HashKey就是秘钥散列
                return KeyHash;
            }
        } catch (Exception e) {
            return "get error";
        }
        return null;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON, WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        try {
            if (Build.VERSION.SDK_INT >= 23) {
                requestPermission();
            }
        } catch (Exception e) {
            Log.e("", "Permission Error Mesg : " + e.getMessage());
        }
        initThirdSoft();
        startEgret();
        getHashKey(this);
    }

    private void startEgret() {
        guc = new GameUpdateComponent(getApplicationContext(), this);

        int version_code = 0;
        PackageInfo info = getPackageInfo(this);
        if (info != null) {
            version_code = info.versionCode;
        }
        map.clear();
        map.put("game_version", guc.getCurrentVersion());
        map.put("android_version", String.valueOf(version_code));
        trackEvent("launch_game", map);

        if (nativeAndroid != null) {
            nativeAndroid.exitGame();
        }
        nativeAndroid = new EgretNativeAndroid(this);
        if (!nativeAndroid.checkGlEsVersion()) {
            Toast.makeText(this, "This device does not support OpenGL ES 2.0.",
                    Toast.LENGTH_LONG).show();
            return;
        }
        nativeAndroid.config.showFPS = false;
        nativeAndroid.config.fpsLogTime = 30;
        nativeAndroid.config.disableNativeRender = false;
        nativeAndroid.config.clearCache = false;
        nativeAndroid.config.loadingTimeout = 0;
        nativeAndroid.config.immersiveMode = true;
        nativeAndroid.config.useCutout = true;

        setExternalInterfaces();

        nativeAndroid.config.preloadPath = guc.preloadPath;
        Log.e(TAG, "gameLog  nativeAndroid.config.preloadPath == " + nativeAndroid.config.preloadPath);

        String versionPath = guc.preloadPath + GameUpdateComponent.HTTP_FOLDER + guc.getCurrentVersion() + File.separator + "game" + File.separator + "index.html";
        Log.i(TAG, "startEgret: check version path exists:" + versionPath);
        File folder = new File(versionPath);
        if (!folder.exists()) {
            Log.i(TAG, "startEgret: versionPath doesn't exist");
        } else {
            Log.d(TAG, "startEgret: versionPath exists");
        }

        String url = "http://" + guc.getCurrentVersion() + "/game/index.html";
        Log.d(TAG, "_startEgret: init game url:" + url);
        if (!nativeAndroid.initialize(url)) {
            Toast.makeText(this, "Initialize native failed.",
                    Toast.LENGTH_LONG).show();
            return;
        }
        setContentView(nativeAndroid.getRootFrameLayout());
    }

    private String handleInterfaceData(String message) {
        JSONObject msg = JSON.parseObject(message);
        String name = msg.getString("name");
        String data = "";
        String user_id = "";
        String merchant_transaction_id = "";
        String callBackUrl = "";
        int amount = 0;
        if (name.equals("")) {
            return "";
        }
        Log.e(TAG, "gameLog  当前获取到的egret调用安卓名称是： " + name);
        switch (name) {
            case "android_upgrade":
                String android_upgrade_url = msg.getString("android_upgrade_url");
                int android_upgrade_type = msg.getIntValue("android_upgrade_type");
                androidUpgrade(android_upgrade_type, android_upgrade_url);
                break;
            case "check_update":
                data = checkUpdateResult(msg).toJSONString();
                break;
            case "start_update":
                String game_update_url = msg.getString("game_update_url");
                guc.startUpdate(game_update_url);
                break;
            case "start_after_update":
                startEgret();
                break;
            case "current_version":
                break;
            case "app_info":
                String currentVersion = guc.getCurrentVersion();
                JSONObject appInfo = new JSONObject();
                appInfo.put("name", "app_info");
                appInfo.put("referrer", referrer);
                appInfo.put("device_id", UUID);
                appInfo.put("channel_code", channelCode);
                appInfo.put("upi_list", upiList);
                appInfo.put("game_version", currentVersion);
                data = appInfo.toJSONString();
                break;
            case "google_login":
                Log.e(TAG, "start google_login ");
                loginToGoogle(msg);
                break;
            case "fb_login":
                Log.e(TAG, "start fb_login ");
                loginToFacebook(msg);
                break;
            case "pay_phonepe":
                Log.e(TAG, "start pay with phonepe");
                user_id = msg.getString("user_id");
                merchant_transaction_id = msg.getString("merchant_transaction_id");
                amount = msg.getIntValue("amount");
                callBackUrl = msg.getString("callback_url");
                String pay_type = msg.getString("pay_type");
                JSONArray pay_data = msg.getJSONArray("pay_data");
                PhonePEpayment(user_id, amount, merchant_transaction_id, callBackUrl, pay_type, pay_data);
                break;
            case "pay_airpay":
                Log.e(TAG, "start pay with airpay");
                user_id = msg.getString("user_id");
                merchant_transaction_id = msg.getString("merchant_transaction_id");
                amount = msg.getIntValue("amount");
                String successUrl = msg.getString("successUrl");
                String failureUrl = msg.getString("failureUrl");
                airpay_merchant_transaction_id = merchant_transaction_id;
                airPayment(user_id, String.valueOf(amount), merchant_transaction_id, successUrl, failureUrl);
                break;
            case "share_wa":
                user_id = msg.getString("user_id");
                shareToWhatsapp(user_id);
                onShareSuccess();
                break;
            case "share_app":
                user_id = msg.getString("user_id");
                shareApp(user_id);
                onShareSuccess();
                break;
            case "vibrate":
                vibrateMobile();
                break;
            case "reinstall":
                reinstall();
                break;
            case "restart":
                restart();
                break;
            case "track_event":
                String eventName = msg.getString("event_name");
                String eventKey = msg.getString("event_key");
                String eventValue = msg.getString("event_value");
                map.clear();
                map.put(eventKey, eventValue);
                trackEvent(eventName, map);
                break;
            case "android_test":
                JSONObject androidTest = new JSONObject();
                androidTest.put("name", "android_test");
                androidTest.put("list1", payUpiList1);
                androidTest.put("list2", payUpiList2);
                data = androidTest.toJSONString();
                break;
        }
        return data;
    }

    private void callExternalInterface(String message) {
        Log.e(TAG, "调用TS端，message=" + message);
        nativeAndroid.callExternalInterface("sendToJS", message);
    }

    private void initThirdSoft() {
        UUID = SharedPreferencesUtils.getString(this, "UUID", "");
        if (UUID == null || UUID.equals("")) {
            UUID = AppUtil.getUUID();
            SharedPreferencesUtils.saveString(this, "UUID", UUID);
        }
        Log.e(TAG, "UUID=" + UUID);
        initReferrer();
        initFacebook(this);
        initPhonePE();
        initAppFlyer();
        initFlurry();
    }

    private JSONObject checkUpdateResult(JSONObject versionData) {
        JSONObject data = new JSONObject();
        data.put("name", "check_update");

        int version_code = 0;
        PackageInfo info = getPackageInfo(this);
        if (info != null) {
            version_code = info.versionCode;
        }

        int remote_android_version_code = versionData.getIntValue("remote_android_version_code");
        int android_force = versionData.getIntValue("android_force");
        if (android_force == 1 && remote_android_version_code > version_code && version_code > 0) {//如果服务端要求强制更新到新版本，并且本地是旧版本，那么就必须强制更新Android，跳到应用市场或者下载地址
            String remote_android_url = versionData.getString("remote_android_url");
            data.put("android_need_update", 1);
            if (remote_android_url.equals("")) {
                data.put("android_update_url", appUrl);
                data.put("android_update_type", Global.ANDROID_UPDATE_TYPE_GOOGLEPLAY);
            } else {
                data.put("android_update_url", remote_android_url);
                data.put("android_update_type", Global.ANDROID_UPDATE_TYPE_WEBSITE);
            }
        } else {
            data.put("android_need_update", 0);
        }

        String remote_game_version = versionData.getString("remote_game_version");
        String remote_game_url = versionData.getString("remote_game_url");
        int game_force = versionData.getIntValue("game_force");
        if (game_force == 1 && guc.hasUpdate(remote_game_url, remote_game_version)) {
            data.put("game_need_update", 1);
        } else {
            data.put("game_need_update", 0);
        }
        data.put("game_update_url", remote_game_url);
        return data;
    }

    public void showUpdateProgress(int progress, int total) {
        try {
            JSONObject result = new JSONObject();
            result.put("name", "update_progress");
            result.put("progress", progress);
            result.put("total", total);
            callExternalInterface(result.toJSONString());
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    public void updateComplete() {
        try {

            map.clear();
            map.put("game_version", guc.getCurrentVersion());
            trackEvent("update_success", map);

            JSONObject result = new JSONObject();
            result.put("name", "ready_for_restart");
            callExternalInterface(result.toJSONString());
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    public void updateFailed(String step) {
        try {

            map.clear();
            map.put("game_version", guc.getCurrentVersion());
            map.put("failue_reason", step);
            trackEvent("update_failue", map);

            JSONObject result = new JSONObject();
            result.put("name", "update_failed");
            result.put("step", step);
            callExternalInterface(result.toJSONString());
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    private void requestPermission() {
        Log.e("requestPermission", "requestPermission");
        ActivityCompat.requestPermissions(MainActivity.this, new String[]{
                android.Manifest.permission.INTERNET,
                android.Manifest.permission.ACCESS_NETWORK_STATE
        }, PERMISSION_REQUEST_CODE);
    }

    private void requestContextPermission() {
        Log.e("requestPermission", "requestPermission");
        ActivityCompat.requestPermissions(MainActivity.this, new String[]{
                Manifest.permission.READ_CONTACTS
        }, PERMISSION_CONTECT_REQUEST_CODE);
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        switch (requestCode) {
            case PERMISSION_REQUEST_CODE:
                if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED && grantResults[1] == PackageManager.PERMISSION_GRANTED) {

                } else {
                    Toast.makeText(getApplicationContext(), "Permission denied, Now you can't access permission.", Toast.LENGTH_LONG).show();
                }
                break;
            case PERMISSION_CONTECT_REQUEST_CODE:
                if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {

                } else {
                    Toast.makeText(getApplicationContext(), "Permission denied, Now you can't access your contact", Toast.LENGTH_LONG).show();
                    JSONObject senddata = new JSONObject();
                    senddata.put("name", "contact_list");
                    senddata.put("data", null);
                    this.callExternalInterface(senddata.toJSONString());
                }
                break;
        }
    }

    private void initReferrer() {
        referrerClient = InstallReferrerClient.newBuilder(this).build();
        referrerClient.startConnection(new InstallReferrerStateListener() {
            @Override
            public void onInstallReferrerSetupFinished(int responseCode) {
                switch (responseCode) {
                    case InstallReferrerClient.InstallReferrerResponse.OK:
                        // Connection established.
                        Log.e(TAG, "InstallReferrerClient Connection established");
                        try {
                            ReferrerDetails response = referrerClient.getInstallReferrer();
                            referrer = response.getInstallReferrer();
                            Log.e(TAG, "referrer=" + referrer);
                        } catch (RemoteException e) {
                            e.printStackTrace();
                        }
                        break;
                    case InstallReferrerClient.InstallReferrerResponse.FEATURE_NOT_SUPPORTED:
                        // API not available on the current Play Store app.
                        Log.e(TAG, "InstallReferrerClient API not available on the current Play Store app");
                        break;
                    case InstallReferrerClient.InstallReferrerResponse.SERVICE_UNAVAILABLE:
                        // Connection couldn't be established.
                        Log.e(TAG, "InstallReferrerClient Connection couldn't be established.");
                        break;
                }
            }

            @Override
            public void onInstallReferrerServiceDisconnected() {
                // Try to restart the connection on the next request to
                // Google Play by calling the startConnection() method.
            }
        });
    }

    private void initFacebook(MainActivity main) {
        FacebookSdk.setApplicationId(getResources().getString(R.string.facebook_app_id));
        FacebookSdk.sdkInitialize(getApplicationContext());
        callbackManager = CallbackManager.Factory.create();
        LoginManager.getInstance().registerCallback(callbackManager, new FacebookCallback<LoginResult>() {
            @Override
            public void onSuccess(LoginResult loginResult) {
                Log.e(TAG, "登录成功");
                Toast.makeText(main, "Facebook login success!", Toast.LENGTH_LONG).show();
                String fb_id = loginResult.getAccessToken().getUserId();
                JSONObject data = new JSONObject();
                data.put("name", "fb_login_success");
                data.put("fb_id", fb_id);
                data.put("type", login_type);
                main.callExternalInterface(data.toJSONString());
            }

            @Override
            public void onCancel() {
                Log.e(TAG, "登录取消");
                Toast.makeText(main, "Facebook login canceled!", Toast.LENGTH_LONG).show();
            }

            @Override
            public void onError(FacebookException exception) {
                Log.e(TAG, "登录失败");
                Toast.makeText(main, "Facebook login failue!", Toast.LENGTH_LONG).show();
            }
        });


//        LoginManager.getInstance().retrieveLoginStatus(this, new LoginStatusCallback() {
//            @Override
//            public void onCompleted(AccessToken accessToken) {
//                 //User was previously logged in, can log them in directly here.
//                 //If this callback is called, a popup notification appears that says
//                 //"Logged in as <User Name>"
//            }
//            @Override
//            public void onFailure() {
//                //No access token could be retrieved for the user
//            }
//            @Override
//            public void onError(Exception exception) {
//                //An error occurred
//            }
//        });

    }

    private void initFlurry() {
        new FlurryAgent.Builder()
                .withLogEnabled(true)
                .withDataSaleOptOut(false) //CCPA - the default value is false
                .withCaptureUncaughtExceptions(true)
                .withIncludeBackgroundSessionsInMetrics(true)
                .withLogLevel(Log.VERBOSE)
                .withPerformanceMetrics(FlurryPerformance.ALL)
                .build(this, "5YR468SQG3SJYJC82XM6");
    }

    private void initAppFlyer() {
        AppsFlyerLib.getInstance().init(appFlyerDevKey, null, this);
        AppsFlyerLib.getInstance().start(this);
        AppsFlyerLib.getInstance().setDebugLog(false);
    }

    private void initPhonePE() {
        PhonePe.init(this);
        List<UPIApplicationInfo> upiApps = null;
        try {
            upiApps = PhonePe.getUpiApps();
        } catch (PhonePeInitException e) {
            e.printStackTrace();
        }
        Log.e(TAG, "upiApps.size=" + upiApps.size());
        for (int i = 0; i < upiApps.size(); i++) {
            UPIApplicationInfo info = upiApps.get(i);
            System.out.println(info.getApplicationName() + "__" + info.getPackageName());
            upiList.add(info.getPackageName());

            JSONObject data = new JSONObject();
            data.put("name", info.getApplicationName());
            data.put("package", info.getPackageName());
            payUpiList1 = payUpiList1 + info.getApplicationName() + "--" + info.getPackageName() + "          ";
        }
        getList();
    }

    private void getList() {
        Intent intent = new Intent(Intent.ACTION_MAIN);
        // 桌面启动属性
        intent.addCategory(Intent.CATEGORY_LAUNCHER);
        PackageManager mPackageManager = getPackageManager();
        // 使用 queryIntentActivities 获取应用名称和包名
        List<ResolveInfo> mResolveInfos = mPackageManager.queryIntentActivities(intent, PackageManager.MATCH_ALL);
        if (mResolveInfos == null || mResolveInfos.isEmpty()) {
            Log.e(TAG, "NOT FIND PACKAGE");
            return;
        }
        for (ResolveInfo info : mResolveInfos) {
            // 获取应用名称
            String appName = info.activityInfo.applicationInfo.loadLabel(mPackageManager).toString();
            // 获取应用包名
            String pkgName = info.activityInfo.packageName;
            Log.e(TAG, "appName=" + appName + "__pkgName=" + pkgName);

            payUpiList2 = payUpiList2 + appName + "--" + pkgName + "          ";

            if (UPI.contains(pkgName) && !upiList.contains(pkgName)) {
                upiList.add(pkgName);
            }
        }
    }

    private void PhonePEpayment(String user_id, int amount, String merchant_transaction_id, String callBackUrl, String pay_type, JSONArray pay_data) {
        //HashMap<String, Object> data = PhonePEPay.cratePhonePEPaymentData(user_id,amount,merchant_transaction_id,callBackUrl,pay_type,pay_data);

        String packageName = pay_data.getString(0);

        HashMap<String, Object> data = new HashMap();
        data.put("merchantTransactionId", merchant_transaction_id);        //String. Mandatory
        data.put("merchantId", PhonePEConfig.MerchantID);             //String. Mandatory
        data.put("merchantUserId", user_id);             //String. Conditional
// merchantUserId - Mandatory if paymentInstrument.type is: PAY_PAGE, CARD, SAVED_CARD, TOKEN.
// merchantUserId - Optional if paymentInstrument.type is: UPI_INTENT, UPI_COLLECT, UPI_QR.
        data.put("amount", amount);                         //Long. Mandatory
        data.put("mobileNumber", "7908834635");          //String. Optional
//        data.put("callbackUrl","http://game.jaldirummy.com/api/pay/PhonePECallBack");    //String. Mandatory
        data.put("callbackUrl", "https://game.jaldirummy.com/api/pay/PhonePECallBack");
        PaymentInstrument mPaymentInstrument = new PaymentInstrument();
        mPaymentInstrument.setType("UPI_INTENT");           // Intent flow. ENUM. Mandatory
        mPaymentInstrument.setTargetApp(packageName);  //String. Mandatory
        data.put("paymentInstrument", mPaymentInstrument);   //OBJECT. Mandatory

        DeviceContext mDeviceContext = new DeviceContext();
        mDeviceContext.setDeviceOS("ANDROID");          // ENUM. Mandatory
        data.put("deviceContext", mDeviceContext);   //OBJECT. Mandatory

        String base64Body = Base64.encodeToString(new Gson().toJson(data).getBytes(), Base64.NO_WRAP);
        String checksum = sha256(base64Body + apiEndPoint + PhonePEConfig.SaltKey) + "###" + PhonePEConfig.KeyIndex;
        Log.e(TAG, "data=" + new Gson().toJson(data));
        Log.e(TAG, "base64Body=" + base64Body);
        Log.e(TAG, "checksum=" + checksum);
        B2BPGRequest b2BPGRequest = new B2BPGRequestBuilder().setData(base64Body).setChecksum(checksum).setUrl(apiEndPoint).build();
        try {
            startActivityForResult(PhonePe.getImplicitIntent(this, b2BPGRequest, packageName), B2B_PG_REQUEST_CODE);
        } catch (PhonePeInitException e) {
        }
    }

    public String sha256(String base) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(base.getBytes(StandardCharsets.UTF_8));
            StringBuffer hexString = new StringBuffer();
            for (int i = 0; i < hash.length; i++) {
                String hex = Integer.toHexString(0xff & hash[i]);
                if (hex.length() == 1) hexString.append('0');
                hexString.append(hex);
            }
            return hexString.toString();
        } catch (Exception ex) {
            throw new RuntimeException(ex);
        }
    }

    private void airPayment(String user_id, String amount, String order_id, String successUrl, String failureUrl) {
        AirpayConfiguration configuration = new AirpayConfiguration(AirpayConfigurationParams.PRODUCTION, AirpayConfigurationParams.MERCHANT_APP);

        Intent myIntent = new Intent(this, AirpayActivity.class);
        myIntent.putExtra(Config.EXTRA_AIRPAY_CONFIGURATION, configuration);
        Bundle b = new Bundle();

        String email = "swapkadam2015@gmail.com";
        String phone = "919167600641";
        String firstName = "Sam";
        String lastName = "Johan";
        String addr = "3rd floor, Trust Houseformat toBldg.Dr. E.Borges Road, behind ITC Hotel";
        String city = "Mumbai";
        String state = "Maharashtra";
        String country = "India";
        String pinCode = "400083";

        String orderId = order_id;

        // Please enter Merchant configuration value
        b.putString("MERCHANT_ID", AirpayConfig.Merchant_Id);
        b.putString("EMAIL", email);
        b.putString("PHONE", phone);
        b.putString("FIRSTNAME", firstName);
        b.putString("LASTNAME", lastName);
        b.putString("ADDRESS", addr);
        b.putString("CITY", city);
        b.putString("STATE", state);
        b.putString("COUNTRY", country);
        b.putString("PIN_CODE", pinCode);
        b.putString("ORDER_ID", orderId);
        b.putString("AMOUNT", amount);
        b.putString("CURRENCY", "356");
        b.putString("ISOCURRENCY", "INR");
        b.putString("CHMOD", "");
        b.putString("CUSTOMVAR", "");
        b.putString("TXNSUBTYPE", "");
        b.putString("WALLET", "0");

        DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
        String sCurDate = df.format(new Date());

        String sSecret = AirpayConfig.API_key; // Please enter secret key value
        String sUserName = AirpayConfig.Username; // Please enter username value
        String sPassword = AirpayConfig.Password; // Please enter password value


        String sAllData = email + firstName
                + lastName + addr
                + city + state
                + country + amount
                + orderId + sCurDate;

        // private key
        String sTemp = sSecret + "@" + sUserName + ":|:" + sPassword;
        String sPrivateKey = sha256(sTemp);

        // key for checksum
        String sTemp2 = sUserName + "~:~" + sPassword;
        String sKey = sha256(sTemp2);

        // checksum
        sAllData = sKey + "@" + sAllData;
        String sChecksum = sha256(sAllData);

        b.putString("CHECKSUM", sChecksum);
        b.putString("PRIVATEKEY", sPrivateKey);
        b.putString("LANGUAGE", "EN");

        //b.putString("SUCCESS_URL", successUrl); // Please enter success url
        //b.putString("FAILURE_URL", failureUrl); // Please enter failure url
        b.putString("SUCCESS_URL", "https://game.jaldirummy.com/api/pay/airpaysuccesscall"); // Please enter success url
        b.putString("FAILURE_URL", "https://game.jaldirummy.com/api/pay/airpaycancelcall"); // Please enter failure url
        Log.e("PARAMS -->>", "PARAMS -->>" + b);
        myIntent.putExtras(b);
        startActivityForResult(myIntent, AIRPAY_REQUEST_CODE);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        Log.e(TAG, "到这里了吗");
        Log.e(TAG, "requestCode  ==  " + requestCode);
        super.onActivityResult(requestCode, resultCode, data);

        if (requestCode == AIRPAY_REQUEST_CODE) {
            onAirpayResult(data);
        }
        if (requestCode == B2B_PG_REQUEST_CODE) {
            if (resultCode == Activity.RESULT_OK && data != null) {
                Bundle bundle = data.getExtras();
                String value = (String) bundle.getSerializable("key_txn_result");
                JSONObject responseData = getPhonePEUIResponse(value);
                responseData.put("name", "phonepe_pay_result");
                Log.e(TAG, "responseData=" + responseData.toJSONString());
                this.callExternalInterface(responseData.toJSONString());
            } else {
                Log.e(TAG, "PHonePE发起支付，没有任何返回");
            }
        }
        if (requestCode == RC_SIGN_IN) {
            Task<GoogleSignInAccount> task = GoogleSignIn.getSignedInAccountFromIntent(data);
            GoogleSignInAccount account;
            try {
                account = task.getResult(ApiException.class);
                Log.e(TAG, "登录成功");
                Toast.makeText(this, "Google login success!", Toast.LENGTH_LONG).show();

                JSONObject senddata = new JSONObject();
                senddata.put("name", "google_login_success");
                senddata.put("google_id", account.getId());
                senddata.put("type", login_type);
                this.callExternalInterface(senddata.toJSONString());
            } catch (ApiException e) {
                Log.e(TAG, "谷歌登录出错" + e.getMessage());
                Toast.makeText(this, "Google login failue! code=" + e.getMessage(), Toast.LENGTH_LONG).show();
                //e.printStackTrace();
            }
        } else {
            callbackManager.onActivityResult(requestCode, resultCode, data);
        }
    }

    private void onAirpayResult(Intent data) {
        try {
            JSONObject senddata = new JSONObject();
            senddata.put("name", "airpay_pay_result");
            if (data != null) {
                Bundle bundle = data.getExtras();
                transactionList = new ArrayList<Transaction>();
                transactionList = (ArrayList<Transaction>) bundle.getSerializable("DATA");
                if (transactionList != null) {
                    Toast.makeText(this, transactionList.get(0).getSTATUS() + "\n" + transactionList.get(0).getSTATUSMSG(), Toast.LENGTH_LONG).show();

                    if (transactionList.get(0).getSTATUS() != null) {
                        Log.e("STATUS -> ", "=" + transactionList.get(0).getSTATUS());

                    }
                    if (transactionList.get(0).getMERCHANTKEY() != null) {
                        Log.e("MERCHANT KEY -> ", "=" + transactionList.get(0).getMERCHANTKEY());

                    }
                    if (transactionList.get(0).getMERCHANTPOSTTYPE() != null) {
                        Log.e("MERCHANT POST TYPE ", "=" + transactionList.get(0).getMERCHANTPOSTTYPE());
                    }
                    if (transactionList.get(0).getSTATUSMSG() != null) {
                        Log.e("STATUS MSG -> ", "=" + transactionList.get(0).getSTATUSMSG()); //  success or fail
                    }
                    if (transactionList.get(0).getTRANSACTIONAMT() != null) {
                        Log.e("TRANSACTION AMT -> ", "=" + transactionList.get(0).getTRANSACTIONAMT());

                    }
                    if (transactionList.get(0).getTXN_MODE() != null) {
                        Log.e("TXN MODE -> ", "=" + transactionList.get(0).getTXN_MODE());
                    }
                    if (transactionList.get(0).getMERCHANTTRANSACTIONID() != null) {
                        Log.e("MERCHANT_TXN_ID -> ", "=" + transactionList.get(0).getMERCHANTTRANSACTIONID()); // order id

                    }
                    if (transactionList.get(0).getSECUREHASH() != null) {
                        Log.e("SECURE HASH -> ", "=" + transactionList.get(0).getSECUREHASH());
                    }
                    if (transactionList.get(0).getCUSTOMVAR() != null) {
                        Log.e("CUSTOMVAR -> ", "=" + transactionList.get(0).getCUSTOMVAR());
                    }
                    if (transactionList.get(0).getTRANSACTIONID() != null) {
                        Log.e("TXN ID -> ", "=" + transactionList.get(0).getTRANSACTIONID());
                    }
                    if (transactionList.get(0).getTRANSACTIONSTATUS() != null) {
                        Log.e("TXN STATUS -> ", "=" + transactionList.get(0).getTRANSACTIONSTATUS());
                    }
                    if (transactionList.get(0).getTXN_DATE_TIME() != null) {
                        Log.e("TXN_DATETIME -> ", "=" + transactionList.get(0).getTXN_DATE_TIME());
                    }
                    if (transactionList.get(0).getTXN_CURRENCY_CODE() != null) {
                        Log.e("TXN_CURRENCY_CODE -> ", "=" + transactionList.get(0).getTXN_CURRENCY_CODE());
                    }
                    if (transactionList.get(0).getTRANSACTIONVARIANT() != null) {
                        Log.e("TRANSACTIONVARIANT -> ", "=" + transactionList.get(0).getTRANSACTIONVARIANT());
                    }
                    if (transactionList.get(0).getCHMOD() != null) {
                        Log.e("CHMOD -> ", "=" + transactionList.get(0).getCHMOD());
                    }
                    if (transactionList.get(0).getBANKNAME() != null) {
                        Log.e("BANKNAME -> ", "=" + transactionList.get(0).getBANKNAME());
                    }
                    if (transactionList.get(0).getCARDISSUER() != null) {
                        Log.e("CARDISSUER -> ", "=" + transactionList.get(0).getCARDISSUER());
                    }
                    if (transactionList.get(0).getFULLNAME() != null) {
                        Log.e("FULLNAME -> ", "=" + transactionList.get(0).getFULLNAME());
                    }
                    if (transactionList.get(0).getEMAIL() != null) {
                        Log.e("EMAIL -> ", "=" + transactionList.get(0).getEMAIL());
                    }
                    if (transactionList.get(0).getCONTACTNO() != null) {
                        Log.e("CONTACTNO -> ", "=" + transactionList.get(0).getCONTACTNO());
                    }
                    if (transactionList.get(0).getMERCHANT_NAME() != null) {
                        Log.e("MERCHANT_NAME -> ", "=" + transactionList.get(0).getMERCHANT_NAME());
                    }
                    if (transactionList.get(0).getSETTLEMENT_DATE() != null) {
                        Log.e("SETTLEMENT_DATE -> ", "=" + transactionList.get(0).getSETTLEMENT_DATE());
                    }
                    if (transactionList.get(0).getSURCHARGE() != null) {
                        Log.e("SURCHARGE -> ", "=" + transactionList.get(0).getSURCHARGE());
                    }
                    if (transactionList.get(0).getBILLEDAMOUNT() != null) {
                        Log.e("BILLEDAMOUNT -> ", "=" + transactionList.get(0).getBILLEDAMOUNT());
                    }
                    if (transactionList.get(0).getISRISK() != null) {
                        Log.e("ISRISK -> ", "=" + transactionList.get(0).getISRISK());
                    }

                    String transid = transactionList.get(0).getMERCHANTTRANSACTIONID();
                    String apTransactionID = transactionList.get(0).getTRANSACTIONID();
                    String amount = transactionList.get(0).getTRANSACTIONAMT();
                    String transtatus = transactionList.get(0).getTRANSACTIONSTATUS();
                    String message = transactionList.get(0).getSTATUSMSG();
                    //customer_vpa = transactionList.get(0).getCUSTOMERVPA();
                    customer_vpa = "";
                    if (transactionList.get(0).getCHMOD().equalsIgnoreCase("upi")) {
                        customer_vpa = ":" + transactionList.get(0).getCUSTOMERVPA();
                    }

                    String merchantid = AirpayConfig.Merchant_Id; // Please enter Merchant Id
                    String username = AirpayConfig.Username;   // Please enter Username
                    String sParam = transid + ":" + apTransactionID + ":" + amount + ":" + transtatus + ":" + message + ":" + merchantid + ":" + username + customer_vpa;
                    CRC32 crc = new CRC32();
                    crc.update(sParam.getBytes());
                    String sCRC = "" + crc.getValue();

                    if (sCRC.equalsIgnoreCase(transactionList.get(0).getSECUREHASH())) {
                        Log.e("Airpay Secure ->", " Secure hash matched");
                    } else {
                        Log.e("Airpay Secure ->", " Secure hash mismatched");
                    }
                    JSONObject resultData = new JSONObject();
                    // This code is to get remaining extra value pair.
                    for (String key : transactionList.get(0).getMyMap().keySet()) {
                        Log.e("EXTRA-->>", "KEY: " + key + " VALUE: " + transactionList.get(0).getMyMap().get(key));
                        String extra_param = transactionList.get(0).getMyMap().get("PRI_ACC_NO_START"); // To replace key value as you want
                        Log.e("Extra Param -->", "=" + extra_param);
                        transactionList.get(0).getMyMap().get(key);
                        resultData.put(key, transactionList.get(0).getMyMap().get(key));
                    }
                    Log.e(TAG, "resultData=" + resultData.toJSONString());
                    senddata.put("airpay_result", resultData);
                }
            } else {
                JSONObject resultData = new JSONObject();
                resultData.put("TRANSACTIONID", airpay_merchant_transaction_id);
                senddata.put("airpay_result", resultData);
            }
            this.callExternalInterface(senddata.toJSONString());
            airpay_merchant_transaction_id = "";
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            Log.e("Error Message --- >>>", "Error Message --- >>> " + e.getMessage());
        }
    }

    public void loginToFacebook(JSONObject msg) {
        int type = msg.getIntValue("type");
        login_type = type;
        AccessToken accessToken = AccessToken.getCurrentAccessToken();
        boolean isLoggedIn = accessToken != null && !accessToken.isExpired();
        if (!isLoggedIn) {
            LoginManager.getInstance().logInWithReadPermissions(MainActivity.this, List.of("public_profile"));
        } else {
            Log.e(TAG, "登录成功");
            Toast.makeText(this, "Facebook login success!", Toast.LENGTH_LONG).show();
            String fb_id = accessToken.getUserId();
            JSONObject data = new JSONObject();
            data.put("name", "fb_login_success");
            data.put("fb_id", fb_id);
            data.put("type", login_type);
            callExternalInterface(data.toJSONString());
        }
    }

    public void loginToGoogle(JSONObject msg) {
        int type = msg.getIntValue("type");
        login_type = type;
        GoogleSignInOptions gso = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
                .requestEmail()
                .requestIdToken("808130737000-r0k0v7g1hfhf4hcq8e7m87nc1quhb89f.apps.googleusercontent.com")
                .build();
        mGoogleSignInClient = GoogleSignIn.getClient(this, gso);
        GoogleSignInAccount account = GoogleSignIn.getLastSignedInAccount(this);
        //如果未授权则可以调用登录，mGoogleSignInClient为初始化好的Google登录实例，RC_SIGN_IN为随意唯一返回标识码，int即可。
        Intent signInIntent = mGoogleSignInClient.getSignInIntent();
        startActivityForResult(signInIntent, RC_SIGN_IN);
    }

    private void shareApp(String userId) {
        String message = "I share with you a very fun rummy game, join now." + "   JaldiRummy " + shareUrl + userId;
        Intent sendIntent = new Intent();
        sendIntent.setAction(Intent.ACTION_SEND);
        sendIntent.putExtra(Intent.EXTRA_TEXT, message);
        sendIntent.setType("text/plain");
        startActivity(sendIntent);
    }

    private void shareToWhatsapp(String userId) {
        String message = "I share with you a very fun rummy game, join now." + "   JaldiRummy " + shareUrl + userId;
        Intent intent = new Intent(Intent.ACTION_SEND);
        intent.setType("text/plain");
        intent.setPackage("com.whatsapp");
        intent.putExtra(Intent.EXTRA_TEXT, message);
        if (intent.resolveActivity(getPackageManager()) == null) {
            Toast.makeText(this, "Please install whatsapp first.", Toast.LENGTH_SHORT).show();
            return;
        }
        startActivity(intent);
    }

    private void onShareSuccess() {
        JSONObject result = new JSONObject();
        result.put("name", "share_access");
        this.callExternalInterface(result.toJSONString());
    }

    private JSONObject getPhonePEUIResponse(String data) {
        String[] list = data.split(":");
        if (list.length > 0) {
            for (int i = 0; i < list.length; i++) {
                String data2 = list[i];
                if (data2.contains("&")) {
                    String[] list2 = data2.split("&");
                    JSONObject dataObj = new JSONObject();
                    if (list2.length > 0) {
                        for (int j = 0; j < list2.length; j++) {
                            String data3 = list2[j];
                            String[] list3 = data3.split("=");
                            if (list3.length > 1) {
                                dataObj.put(list3[0], list3[1]);
                            }
                        }
                    }
                    return dataObj;
                }
            }
        }
        return null;
    }

    @Override
    protected void onPause() {
        super.onPause();
        nativeAndroid.pause();
        Log.d(TAG, "pause");
    }

    @Override
    protected void onResume() {
        super.onResume();
        nativeAndroid.resume();
        Log.d(TAG, "resume");

        JSONObject result = new JSONObject();
        result.put("name", "resume");
        this.callExternalInterface(JSON.toJSONString(result));
    }

    @Override
    public boolean onKeyDown(final int keyCode, final KeyEvent keyEvent) {
        if (keyCode == KeyEvent.KEYCODE_BACK) {
            nativeAndroid.exitGame();
        }

        return super.onKeyDown(keyCode, keyEvent);
    }

    private void setExternalInterfaces() {
        nativeAndroid.setExternalInterface("sendToNative", new INativePlayer.INativeInterface() {
            @Override
            public void callback(String message) {
                Log.d(TAG, "gameLog  Get message: " + message);
                String data = "";
                data = handleInterfaceData(message);
                if (!data.equals("")) {
                    Log.e(TAG, "sendToJS=" + data);
                    nativeAndroid.callExternalInterface("sendToJS", data);
                }
            }
        });
        nativeAndroid.setExternalInterface("@onState", new INativePlayer.INativeInterface() {
            @Override
            public void callback(String message) {
                Log.e(TAG, "Get @onState: " + message);
            }
        });
        nativeAndroid.setExternalInterface("@onError", new INativePlayer.INativeInterface() {
            @Override
            public void callback(String message) {
                Log.e(TAG, "Get @onError: " + message);
            }
        });
        nativeAndroid.setExternalInterface("@onJSError", new INativePlayer.INativeInterface() {
            @Override
            public void callback(String message) {
                Log.e(TAG, "Get @onJSError: " + message);
            }
        });
    }

    private void vibrateMobile() {
        Vibrator vibrator = (Vibrator) this.getSystemService(VIBRATOR_SERVICE);
        vibrator.vibrate(1000);
    }

    private void androidUpgrade(int android_upgrade_type, String android_upgrade_url) {
        if (android_upgrade_type == Global.ANDROID_UPDATE_TYPE_GOOGLEPLAY) {
            Uri uri = Uri.parse(android_upgrade_url);
            Intent intent = new Intent(Intent.ACTION_VIEW, uri);
            startActivity(intent);
        }
        if (android_upgrade_type == Global.ANDROID_UPDATE_TYPE_WEBSITE) {
            Uri uri = Uri.parse(android_upgrade_url);
            Intent intent = new Intent(Intent.ACTION_VIEW, uri);
            startActivity(intent);
        }
    }

    private void reinstall() {
        String url = "";
        if (channelCode == 1) {
            url = appUrl;
        } else {
            url = "jaldirummy.com";
        }
        Uri uri = Uri.parse(url);
        Intent intent = new Intent(Intent.ACTION_VIEW, uri);
        startActivity(intent);
    }

    private void restart() {
        String packageName = getPackageName();
        String className = getClass().getName();
        Intent intent = new Intent(Intent.ACTION_MAIN);
        intent.addCategory(Intent.CATEGORY_LAUNCHER);
        ComponentName cn = new ComponentName(packageName, className);
        intent.setComponent(cn);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
        startActivity(intent);
        finish();
    }

    private void trackEvent(String eventName, Map<String, String> eventValue) {
        Log.e(TAG, "logEvent=" + eventName);
        FlurryAgent.logEvent(eventName, eventValue);
//        AppsFlyerLib.getInstance().logEvent(getApplicationContext(),
//                eventName,
//                eventValue,
//                new AppsFlyerRequestListener() {
//                    @Override
//                    public void onSuccess() {
//                        Log.d(TAG, "Event sent successfully");
//                    }
//                    @Override
//                    public void onError(int i, @NonNull String s) {
//                        Log.d(TAG, "Event failed to be sent:\n" + "Error code: " + i + "\n" + "Error description: " + s);
//                    }
//                });
    }

    @Override
    public boolean dispatchKeyEvent(KeyEvent event) {
        if (event.getKeyCode() == KeyEvent.KEYCODE_BACK) {
            //do something.
            return true;
        } else {
            return super.dispatchKeyEvent(event);
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
    }

    public PackageInfo getPackageInfo(Context context) {
        PackageInfo info = null;
        PackageManager manager = context.getPackageManager();
        try {
            info = manager.getPackageInfo(context.getPackageName(), 0);
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        }
        return info;
    }
}
