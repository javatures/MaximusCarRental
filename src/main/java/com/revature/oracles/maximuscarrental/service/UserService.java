package com.revature.oracles.maximuscarrental.service;

import java.util.List;

import com.revature.oracles.maximuscarrental.exception.NotFoundException;
import com.revature.oracles.maximuscarrental.models.Car;
import com.revature.oracles.maximuscarrental.models.User;
import com.revature.oracles.maximuscarrental.models.Image;
import com.revature.oracles.maximuscarrental.repo.ImageRepo;
import com.revature.oracles.maximuscarrental.repo.UserRepo;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  private static final Logger log = LogManager.getLogger(UserService.class);

  @Autowired
  private UserRepo userRepo;

  public List<User> getAll() {
    log.debug("Getting all Users");
    return userRepo.findAll();
  }

  public User findById(int id) {
    log.debug("Finding User with ID: " + id);
    //sending back 404 response if not found
    return userRepo.findById(id).orElseThrow(() -> new NotFoundException("User not Found!"));
  }

  public User add(User user) {
    log.debug("Adding user: " + user);
    return userRepo.save(user);
  }
}
