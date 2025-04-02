package com.rishabh.referralandearn.controller;

import com.rishabh.referralandearn.dto.UserDto;
import com.rishabh.referralandearn.model.User;
import com.rishabh.referralandearn.request.CreateUserRequest;
import com.rishabh.referralandearn.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final ModelMapper modelMapper;
    private final UserService userService;


    public UserController(ModelMapper modelMapper,
                          UserService userService) {
        this.modelMapper = modelMapper;
        this.userService = userService;
    }

    @GetMapping("/userName/{userName}")
    public ResponseEntity<?> getUserByUsername(@PathVariable String userName) {
        final var userDTO = modelMapper.map(userService.getUserByUsername(userName), UserDto.class);
        return ResponseEntity.ok(userDTO);
    }

    @GetMapping("/{referralCode}")
    public ResponseEntity<?> getAllByReferralCode(@PathVariable String referralCode) {
        final var userDTOs = userService.getAllByReferralCode(referralCode)
                .stream().map(x -> modelMapper.map(x, UserDto.class));
        return ResponseEntity.ok(userDTOs);
    }

    @PostMapping
    public ResponseEntity<?> createUser(@Valid @RequestBody CreateUserRequest createUserRequest) {
        final var user = modelMapper.map(createUserRequest, User.class);
        final var userDto = modelMapper.map(userService.createUser(user), UserDto.class);
        return ResponseEntity.status(HttpStatus.CREATED).body(userDto);
    }

    @GetMapping("/all/{id}")
    public ResponseEntity<?> getAllUsers(@PathVariable String id) {
        long userId = Long.parseLong(id);
        final var userDTOs = userService.getAllUsers()
                .stream().filter(x-> x.getId() != userId).map(x -> modelMapper.map(x, UserDto.class));
        return ResponseEntity.ok(userDTOs);
    }

    @DeleteMapping("/deleteuser/{userId}")
    public ResponseEntity<?> deleteUserById(@PathVariable String userId) {
        long id = Long.parseLong(userId);
        userService.deleteUserById(id);
        return ResponseEntity.ok("User deleted successfully");
    }


}
