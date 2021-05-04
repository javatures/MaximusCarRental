package com.revature.oracles.maximuscarrental.controllers;

import java.util.List;
import java.util.stream.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.oracles.maximuscarrental.repo.UserRepo;
import com.revature.oracles.maximuscarrental.models.User;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("users")
public class UserController {
    @Autowired
    UserRepo userRepo;

    @GetMapping
    public List<User> getAll() {
        List<User> users = StreamSupport.stream(userRepo.findAll().spliterator(), false)
                .collect(Collectors.toList());
        return users;
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable(name = "id") int id) {
        return userRepo.findById(id).get();
    }

    @PostMapping
    public User postUser(@RequestBody User User) {
        return userRepo.save(User);
    }
}