package com.rishabh.referralandearn;

import com.rishabh.referralandearn.dto.UserDto;
import com.rishabh.referralandearn.model.User;
import com.rishabh.referralandearn.request.CreateUserRequest;
import com.rishabh.referralandearn.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    private UserDto userDto;
    private CreateUserRequest createUserRequest;

    @BeforeEach
    public void setUp() {
        userDto = new UserDto();
        // set properties for userDto
        createUserRequest = new CreateUserRequest();
        // set properties for createUserRequest
    }

    @Test
    public void testGetUserByUsername() throws Exception {
        User user = new User();
        // set properties for user
        when(userService.getUserByUsername(any(String.class))).thenReturn(user);

        mockMvc.perform(get("/api/user/userName/{userName}", "testUser")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    public void testGetAllByReferralCode() throws Exception {
        User user1 = new User();
        User user2 = new User();
        List<User> user = Arrays.asList(user1, user2);

        when(userService.getAllByReferralCode(any(String.class))).thenReturn(user);

        mockMvc.perform(get("/api/user/{referralCode}", "testCode")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }



}
