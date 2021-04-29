package com.revature.oracles.maximuscarrental.controllers;

import java.util.List;
import java.util.stream.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.revature.oracles.maximuscarrental.repo.CarRepo;
import com.revature.oracles.maximuscarrental.models.Car;

public class CarController {
 
    @Autowired
    CarRepo carRepo;

    @GetMapping
    public List<Car> getAll()
    {
        List<Car> cars = StreamSupport.stream(carRepo.findAll().spliterator(), false).collect(Collectors.toList());
        return cars;
    } 

    @GetMapping(name = "/{id}")
    public Car getCar(@PathVariable(name = "id") int id)
    {
        return carRepo.findById(id).get();
    }
}
