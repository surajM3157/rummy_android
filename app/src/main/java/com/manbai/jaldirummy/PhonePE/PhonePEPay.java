package com.manbai.jaldirummy.PhonePE;

import com.alibaba.fastjson.JSONArray;

import java.util.HashMap;

public class PhonePEPay {
    public static HashMap<String, Object> cratePhonePEPaymentData(String user_id, int amount, String merchant_transaction_id, String callBackUrl, String pay_type, JSONArray pay_data) {
        HashMap<String, Object> data = null;
        if (pay_type.equals("UPI_INTENT")) {
            String packageName = pay_data.getString(0);
            data = new HashMap();
            data.put("merchantTransactionId", merchant_transaction_id);        //String. Mandatory
            data.put("merchantId", PhonePEConfig.MerchantID);             //String. Mandatory
            data.put("merchantUserId", user_id);             //String. Conditional
            data.put("amount", amount);                         //Long. Mandatory
            data.put("mobileNumber", "7700062993");          //String. Optional
            data.put("callbackUrl", "http://game.jaldirummy.com/api/pay/PhonePECallBack");    //String. Mandatory

            PaymentInstrument mPaymentInstrument = new PaymentInstrument();
            mPaymentInstrument.setType("UPI_INTENT");           // Intent flow. ENUM. Mandatory
            mPaymentInstrument.setTargetApp(packageName);  //String. Mandatory
            data.put("paymentInstrument", mPaymentInstrument);   //OBJECT. Mandatory

            DeviceContext mDeviceContext = new DeviceContext();
            mDeviceContext.setDeviceOS("ANDROID");          // ENUM. Mandatory
            data.put("deviceContext", mDeviceContext);   //OBJECT. Mandatory
        } else if (pay_type.equals("CARD")) {
//            data = new HashMap();
//            data.put("merchantTransactionId",merchant_transaction_id);
//            data.put("merchantId", PhonePEConfig.MerchantID);
//            data.put("merchantUserId", user_id);
//            data.put("amount",amount);
//            data.put("redirectUrl","https://mykewlapp.com/redirect");
//            data.put("redirectMode","POST");
//            data.put("callbackUrl",callBackUrl);
//
//            CardsPaymentInstruments mPaymentInstrument = new CardsPaymentInstruments();
//            mPaymentInstrument.setType("CARD"); // Card Flow
//            mPaymentInstrument.setAuthMode("3DS");
//
//            ExpiryDetails mExpiryDetails = new ExpiryDetails();
//            mExpiryDetails.setMonth("06");
//            mExpiryDetails.setYear("2027");
//
//            CardDetails mNewCardDetails = new CardDetails();
//            mNewCardDetails.setEncryptedCardNumber("4208585190116667");
//            mNewCardDetails.setCardHolderName("Carlos Sainz");
//            mNewCardDetails.setEncryptionKeyId(69213);
//            mNewCardDetails.setExpiry(mExpiryDetails);
//            mNewCardDetails.setEncryptedCvv("508");
//
//            mPaymentInstrument.setCardDetails(mNewCardDetails);
//            data.put("paymentInstrument",mPaymentInstrument);
        }
        return data;
    }
}
