package com.revature.oracles.maximuscarrental.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.oracles.maximuscarrental.models.Car;

public interface CarRepo extends JpaRepository<Car, Integer>{

}