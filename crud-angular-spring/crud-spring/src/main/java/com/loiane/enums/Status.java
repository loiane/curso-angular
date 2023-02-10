package com.loiane.enums;

public enum Status {
    ACTIVE("Ativo"), INACTIVE("Inativo");

    private String value;

    private Status(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return value;
    }
}
