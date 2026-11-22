package com.mycompany.eshop.exception;

public enum BusinessErrorCode {
    PRODUCT_NOT_AVAILABLE(1001, "Product {0} is not available in warehouse {1}"),
    PRODUCT_ALREADY_EXISTS(1002,"Product {0} already exists"),
    PRODUCT_NOT_EXISTS(1003,"This product does not exists.");

    private final int code;
    private final String message;

    BusinessErrorCode(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public int getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }

}
