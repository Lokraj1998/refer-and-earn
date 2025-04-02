package com.rishabh.referralandearn.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Timestamp;

@Entity
@Table(name = "user", schema = "refer_and_earn")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_name", length = 25)
    private String userName;

    @Column(name = "first_name", length = 50)
    private String firstName;

    @Column(name = "last_name", length = 50)
    private String lastName;

    @Column(name = "email", length = 50)
    private String email;

    @Column(name = "password", length = 50)
    private String password;

    @Column(name = "referral_code", length = 5)
    private String referralCode;

    public Double getReward() {
        if(this.reward == null){
            this.reward = (double) 0;
        }
        return reward;
    }

    @Column(name = "reward")
    private Double reward;

    @Column(name = "created_at")
    private Timestamp createdAt;

    @Column(name = "refer_by", length = 5)
    private String referBy;

    @Column(name = "role", length = 5)
    private String role;

}