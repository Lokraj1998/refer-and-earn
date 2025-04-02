package com.rishabh.referralandearn.service;

import com.rishabh.referralandearn.dto.UserDto;
import com.rishabh.referralandearn.model.User;
import com.rishabh.referralandearn.repository.UserRepository;
import com.rishabh.referralandearn.request.CreateUserRequest;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    private User user;
    private UserDto userDto;
    private CreateUserRequest createUserRequest;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);

        user = new User();
        user.setReferralCode("testCode");
        user.setUserName("testUser");
        user.setReferBy("testReferBy");
        user.setEmail("testEmail@gmail.com");

        userDto = new UserDto();
        // set properties for userDto

        createUserRequest = new CreateUserRequest();
        createUserRequest.setUserName("testUser");
        createUserRequest.setEmail("test@gmail.com");
        createUserRequest.setReferBy("testReferBy");
        createUserRequest.setPassword("testCode");

    }

    @Test
    public void testGetAllUsers() {
        when(userRepository.findAll()).thenReturn(Arrays.asList(user));

        List<User> result = userService.getAllUsers();

        assertEquals(Arrays.asList(user), result);
    }

}