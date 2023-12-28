package com.manbai.jaldirummy.PhonePE;

public class CardDetails {
    private String encryptedCardNumber;
    private String cardHolderName;
    private int encryptionKeyId;
    private ExpiryDetails expiry;
    private String encryptedCvv;


    public CardDetails() {

    }

    public void setEncryptedCardNumber(String encryptedCardNumber) {
        this.encryptedCardNumber = encryptedCardNumber;
    }

    public void setCardHolderName(String cardHolderName) {
        this.cardHolderName = cardHolderName;
    }

    public void setEncryptionKeyId(int encryptionKeyId) {
        this.encryptionKeyId = encryptionKeyId;
    }

    public void setExpiry(ExpiryDetails expiry) {
        this.expiry = expiry;
    }

    public void setEncryptedCvv(String encryptedCvv) {
        this.encryptedCvv = encryptedCvv;
    }
}
