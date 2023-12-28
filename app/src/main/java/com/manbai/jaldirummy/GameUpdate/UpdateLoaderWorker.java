package com.manbai.jaldirummy.GameUpdate;

import static com.manbai.jaldirummy.GameUpdate.Global.LOG_TAG;

import android.os.Handler;
import android.os.Message;
import android.util.Log;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URLConnection;
import java.util.List;

class UpdateLoaderWorker implements Runnable {

    private String _downloadFolder = "";
    private String _contentFolderUrl = "";
    private List<ManifestFile> _files = null;
    private Handler _uiHandler = null;

    /**
     * Constructor.
     */
    UpdateLoaderWorker(String downloadFolder, String contentFolderUrl, List<ManifestFile> files, Handler uiHandler) {
        _downloadFolder = downloadFolder;
        _contentFolderUrl = contentFolderUrl;
        _files = files;
        _uiHandler = uiHandler;
    }

    @Override
    public void run() {
        Log.i(LOG_TAG, "_installUpdate: start download files");

        List<ManifestFile> files = _files;
        String contentFolderUrl = _contentFolderUrl;
        String downloadFolder = _downloadFolder;
        Handler uiHandler = _uiHandler;

        long totalSize = 0;
        for (int i = 0; i < files.size(); i++) {
            totalSize += files.get(i).size;
        }

        String fileUrl = "";
        long progress = 0;
        try {
            for (int i = 0; i < files.size(); i++) {
                ManifestFile file = files.get(i);
                Message msg = new Message();
                fileUrl = URLUtility.construct(contentFolderUrl, file.name);
                progress += file.size;
                Log.i(LOG_TAG, "download url from：" + fileUrl);
                String filePath = GameUpdateComponent.getPath(downloadFolder, file.name);
                download(fileUrl, filePath);
                msg.what = i == (files.size() - 1) ? GameUpdateComponent.PROGRESS_COMPLETE : GameUpdateComponent.PROGRESS_UPDATE;
                msg.arg1 = (int) (progress * 1.0 / totalSize * 100);
                uiHandler.sendMessage(msg);
            }
        } catch (Exception ex) {
            Log.e(LOG_TAG, "downloadFiles failed");
            ex.printStackTrace();
            Message msg = new Message();
            msg.what = GameUpdateComponent.PROGRESS_EXCEPTION;
            msg.obj = Global.ERROR_DOWNLOAD_UPDATE_FILE + "__" + fileUrl;
            uiHandler.sendMessage(msg);
        }

        _files = null;
    }

    /**
     * Download file from server, save it on the disk and check his hash.
     *
     * @param urlFrom  url to download from
     * @param filePath where to save file
     * @throws IOException
     */
    public void download(final String urlFrom,
                         final String filePath) throws Exception {
        final File downloadFile = new File(filePath);
        GameUpdateComponent.delete(downloadFile);
        GameUpdateComponent.ensureDirectoryExists(downloadFile.getParentFile());

        // download file
        final URLConnection connection = GameUpdateComponent.createConnectionToURL(urlFrom);
        final InputStream input = new BufferedInputStream(connection.getInputStream());
        final OutputStream output = new BufferedOutputStream(new FileOutputStream(filePath, false));

        final byte[] data = new byte[1024];
        int count;
        while ((count = input.read(data)) != -1) {
            output.write(data, 0, count);
        }

        output.flush();
        output.close();
        input.close();
    }
}
