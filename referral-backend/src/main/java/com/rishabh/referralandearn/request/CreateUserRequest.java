package com.rishabh.referralandearn.request;

import lombok.Data;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
public class CreateUserRequest {

    @NotNull
    @NotEmpty
    private String userName;

    @NotNull
    @NotEmpty
    private String referBy;

    @NotNull
    @NotEmpty
    private String firstName;

    @NotNull
    @NotEmpty
    private String password;

    private String lastName;
    private String email;
}