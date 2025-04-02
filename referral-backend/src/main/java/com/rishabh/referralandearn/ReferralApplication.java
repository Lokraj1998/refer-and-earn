package com.rishabh.referralandearn;

import com.rishabh.referralandearn.repository.UserRepository;
import com.rishabh.referralandearn.util.RandomStringGenerator;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ReferralApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(ReferralApplication.class, args);
    }


    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    @Autowired
    UserRepository userRepository;

    @Autowired
    RandomStringGenerator randomStringGenerator;

    @Override
    public void run(String... args) {
        // Removed the user creation and saving logic as requested
    }
}