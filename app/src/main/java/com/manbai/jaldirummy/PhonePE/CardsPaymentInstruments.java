package com.manbai.jaldirummy.PhonePE;

public class CardsPaymentInstruments {
    String type;
    String authMode;

    CardDetails cardDetails;

    public CardsPaymentInstruments() {

    }

    public void setType(String type) {
        this.type = type;
    }

    public void setAuthMode(String authMode) {
        this.authMode = authMode;
    }

    public void setCardDetails(CardDetails cardDetails) {
        this.cardDetails = cardDetails;
    }
}
