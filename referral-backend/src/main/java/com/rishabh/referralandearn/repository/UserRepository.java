package com.rishabh.referralandearn.repository;

import com.rishabh.referralandearn.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUserName(String userName);
    List<User> findAllByReferBy(String code);
    boolean existsUserByReferralCode(String code);
    User findByReferralCode(String referralCode);
}
