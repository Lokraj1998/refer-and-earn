package com.rishabh.referralandearn.dto;

import lombok.Data;

@Data
public class UserDto {

    private Long id;
    private String userName;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String referralCode;
    private Double reward;
    private String referBy;
    private String role;

}
