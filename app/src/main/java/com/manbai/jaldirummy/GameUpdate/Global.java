package com.manbai.jaldirummy.GameUpdate;

import android.util.Log;

public class Global {

    public static final int ANDROID_UPDATE_TYPE_GOOGLEPLAY = 1;
    public static final int ANDROID_UPDATE_TYPE_WEBSITE = 10;

    public static final String ERROR_MANIFEST_NOT_READ = "ERROR_MANIFEST_NOT_READ";
    public static final String ERROR_READ_ASSET = "ERROR_READ_ASSET";
    public static final String ERROR_COPY_EXTENAL_ASSET = "ERROR_COPY_EXTENAL_ASSET";
    public static final String ERROR_COPY_ORIGIN_ASSET = "ERROR_COPY_ORIGIN_ASSET";
    public static final String ERROR_DOWNLOAD_MANIFEST_NOT_READ = "ERROR_DOWNLOAD_MANIFEST_NOT_READ";
    public static final String ERROR_DOWNLOAD_MANIFEST = "ERROR_DOWNLOAD_MANIFEST";
    public static final String ERROR_COMPARE_MANIFEST_NULL = "ERROR_COMPARE_MANIFEST_NULL";
    public static final String ERROR_COMPARE_MANIFEST = "ERROR_COMPARE_MANIFEST";
    public static final String ERROR_COPY_CURRENT_VERSION_ASSET = "ERROR_COPY_CURRENT_VERSION_ASSET";
    public static final String ERROR_DOWNLOAD_UPDATE_FILE = "ERROR_DOWNLOAD_UPDATE_FILE";

    public static final String LOG_TAG = "jj------Android------>";

    /**
     * ex:99.99.99 to 999999
     *
     * @param ver
     * @return
     */
    public static int parseVersion(String ver) {
        Log.i(LOG_TAG, "parseVersion param: " + ver);
        String[] arr = ver == null ? new String[]{"0"} : ver.split("\\.");
        int verNm = 0;

        for (int i = arr.length - 1; i >= 0; i--) {
            if (i > 2) {
                continue;
            }
            verNm += (Integer.parseInt(arr[i]) * Math.pow(100, 2 - i));
        }

        return verNm;
    }

    public static String versionToString(int ver) {
        String str = Integer.toString(ver);
        String v1 = str.substring(str.length() - 2);
        String v2 = str.substring(str.length() - 4, str.length() - 2);
        String v3 = str.substring(0, str.length() - 4);
        String sb = Integer.parseInt(v3) + "." +
                Integer.parseInt(v2) + "." +
                Integer.parseInt(v1);
        return sb;
    }

    public static String getFileDirByUrl(String urlString /*"http://game.com/game/index.html"*/) {
        int lastSlash = urlString.lastIndexOf('/');
        String server = urlString.substring(0, lastSlash + 1);
        return server.replaceFirst("://", "/").replace(":", "#0A");
    }
}
