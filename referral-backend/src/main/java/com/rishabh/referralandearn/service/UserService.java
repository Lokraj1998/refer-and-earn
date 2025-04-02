package com.rishabh.referralandearn.service;

import com.rishabh.referralandearn.exception.CodeNotFoundException;
import com.rishabh.referralandearn.exception.MaxPersonCountException;
import com.rishabh.referralandearn.exception.UserNotFoundException;
import com.rishabh.referralandearn.exception.UsernameExistsException;
import com.rishabh.referralandearn.model.User;
import com.rishabh.referralandearn.repository.UserRepository;
import com.rishabh.referralandearn.util.RandomStringGenerator;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Value("${defaultRefCount}")
    private int defaultRefCount;

    private final UserRepository repository;

    private final RandomStringGenerator stringGenerator;


    public UserService(UserRepository repository, RandomStringGenerator stringGenerator) {
        this.repository = repository;
        this.stringGenerator = stringGenerator;
    }


    public User getUserByUsername(String userName) {
        return repository.findByUserName(userName).orElseThrow(() -> new UserNotFoundException(" user not found!"));
    }

    public List<User> getAllByReferralCode(String referralCode) {
        if (!repository.existsUserByReferralCode(referralCode)) {
            throw new UserNotFoundException(" user not found with given code!");
        }
        return repository.findAllByReferBy(referralCode);
    }

    public User createUser(User user) {

        boolean usernameExists = repository.findByUserName(user.getUserName()).isPresent();
        if (usernameExists) {
            throw new UsernameExistsException("Username already present please try another user name");
        }

        if (user.getReferBy() == null || user.getReferBy().isEmpty()) {
            throw new CodeNotFoundException("referral code not found");
        }
        User refUser = getUserByReferralCode(user.getReferBy());
        refUser.setReward(refUser.getReward() + 500.00);
        List<User> users = getAllByReferralCode(user.getReferBy());
//        Double oldReward = users.stream()
//                .mapToDouble(u -> u.getReward() != null ? u.getReward() : 0.00)
//                .sum();
        int referredUserCount = users.size();
        if (referredUserCount < defaultRefCount) {
            user.setReferralCode(generateCode());
            //   user.setReward(500.00);
//            if (oldReward == null || oldReward == 0.00) {
//                refUser.setReward(500.00);
//            } else {
//                refUser.setReward(user.getReward() + oldReward);
//            }
        } else {
            throw new MaxPersonCountException("max person count has been reached!");
        }
        repository.save(user);
        repository.save(refUser);
        return user;
    }

    private User getUserByReferralCode(String referralCode) {
        return repository.findByReferralCode(referralCode);
    }

    private String generateCode() {
        String generated = "";
        do {
            generated = stringGenerator.generate();
        } while (repository.existsUserByReferralCode(generated));

        return generated;
    }


    public List<User> getAllUsers() {
        return repository.findAll();
    }

    public void deleteUserById(long id) {
        repository.deleteById(id);
    }
}
