package com.manbai.jaldirummy;

import android.annotation.SuppressLint;
import android.content.Context;
import android.database.Cursor;
import android.provider.ContactsContract;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

public class AppUtil {

    public static final String gameUrl = "http://xx.xx.xx.xx:8887/hero/index.html";

    public static boolean debug = true;

    public static String getUUID() {
        long time = System.currentTimeMillis() / 1000;
        String timeStr = String.valueOf(time);
        StringBuffer sb = new StringBuffer();
        long result;
        for (int i = 0; i < 4; i++) {
            result = Math.round(Math.random() * 25 + 65);
            sb.append((char) result);
        }
        sb.append(timeStr.substring(1));
        return sb.toString();
    }

    @SuppressLint("Range")
    public static JSONArray getAllContacts(Context context) {
        JSONArray contacts = new JSONArray();

        Cursor cursor = context.getContentResolver().query(
                ContactsContract.Contacts.CONTENT_URI, null, null, null, null);
        while (cursor.moveToNext()) {
            //新建一个联系人实例
            JSONObject temp = new JSONObject();
            String contactId = cursor.getString(cursor.getColumnIndex(ContactsContract.Contacts._ID));
            //获取联系人姓名
            String name = cursor.getString(cursor.getColumnIndex(ContactsContract.Contacts.DISPLAY_NAME));
            //String string = cursor.getString(cursor.getColumnIndex(ContactsContract.Contacts.PHOTO_URI));
            temp.put("name", name);
            //获取联系人电话号码
            Cursor phoneCursor = context.getContentResolver().query(ContactsContract.CommonDataKinds.Phone.CONTENT_URI,
                    null, ContactsContract.CommonDataKinds.Phone.CONTACT_ID + "=" + contactId, null, null);
            while (phoneCursor.moveToNext()) {
                String phone = phoneCursor.getString(phoneCursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.NUMBER));
                phone = phone.replace("-", "");
                phone = phone.replace(" ", "");
                temp.put("phone", phone);

            }
            //temp.photo = string;

            //获取联系人备注信息
//            Cursor noteCursor = context.getContentResolver().query(
//                    ContactsContract.Data.CONTENT_URI,
//                    new String[]{ContactsContract.Data._ID, ContactsContract.CommonDataKinds.Nickname.NAME},
//                    ContactsContract.Data.CONTACT_ID + "=?" + " AND " + ContactsContract.Data.MIMETYPE + "='"
//                            + ContactsContract.CommonDataKinds.Nickname.CONTENT_ITEM_TYPE + "'",
//                    new String[]{contactId}, null);
//            if (noteCursor.moveToFirst()) {
//                do {
//                    @SuppressLint("Range") String note = noteCursor.getString(noteCursor
//                            .getColumnIndex(ContactsContract.CommonDataKinds.Nickname.NAME));
//                    temp.note = note;
//                    Log.i("note:", note);
//                } while (noteCursor.moveToNext());
//            }
            contacts.add(temp);
            //记得要把cursor给close掉
            phoneCursor.close();
        }
        cursor.close();
        return contacts;
    }

}
