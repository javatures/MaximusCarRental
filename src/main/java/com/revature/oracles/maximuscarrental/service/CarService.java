package com.revature.oracles.maximuscarrental.service;

import java.util.List;

import com.revature.oracles.maximuscarrental.exception.NotFoundException;
import com.revature.oracles.maximuscarrental.models.Car;
import com.revature.oracles.maximuscarrental.repo.CarRepo;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarService {
  private static final Logger log = LogManager.getLogger(CarService.class);

  @Autowired
  private CarRepo carRepo;

  public List<Car> getAll() {
    log.debug("Getting all cars");
    return carRepo.findAll();
  }

  public Car findById(int id) {
    log.debug("Finding car with ID: " + id);
    //sending back 404 response if not found
    return carRepo.findById(id).orElseThrow(() -> new NotFoundException("Car not Found for ID: " + id));
  }
}
