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

import com.revature.oracles.maximuscarrental.repo.CarRepo;
import com.revature.oracles.maximuscarrental.models.Car;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("car")
public class CarController {
    @Autowired
    CarRepo carRepo;

    @GetMapping
    public List<Car> getAll() {
        List<Car> cars = StreamSupport.stream(carRepo.findAll().spliterator(), false)
            .collect(Collectors.toList());
        return cars;
    }

    @GetMapping("/{id}")
    public Car getCar(@PathVariable(name = "id") int id) {
        return carRepo.findById(id).get();
    }

    @PostMapping
    public Car postRenter(@RequestBody Car car) {
        return carRepo.save(car);
    }
}