package com.mycompany.eshop.exception;

import java.util.LinkedHashMap;
import java.util.Map;

public class RuleViolationException extends RuntimeException {
    private final Map<String, String> additionalInfo;
    private final BusinessErrorCode businessErrorCode;

    public RuleViolationException(BusinessErrorCode businessErrorCode) {
        this(businessErrorCode, new String[0]);
    }

    public RuleViolationException(BusinessErrorCode businessErrorCode, String... args) {
        super(businessErrorCode.getMessage());

        this.businessErrorCode = businessErrorCode;
        this.additionalInfo = new LinkedHashMap<>();

        if (args != null) {
            for (int i = 0; i < args.length; i++) {
                this.additionalInfo.put(String.valueOf(i), args[i]);
            }
        }
    }

    public BusinessErrorCode getType() {
        return businessErrorCode;
    }

    public Map<String, String> getAdditionalInfo() {
        return additionalInfo;
    }

}
