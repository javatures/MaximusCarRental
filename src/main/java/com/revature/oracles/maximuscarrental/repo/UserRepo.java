package com.revature.oracles.maximuscarrental.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.oracles.maximuscarrental.models.User;

public interface UserRepo extends JpaRepository<User, Integer>{

}