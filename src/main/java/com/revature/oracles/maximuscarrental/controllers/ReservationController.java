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

import com.revature.oracles.maximuscarrental.repo.ReservationRepo;
import com.revature.oracles.maximuscarrental.models.Reservation;
import com.revature.oracles.maximuscarrental.models.Car;
import com.revature.oracles.maximuscarrental.models.User;
import com.revature.oracles.maximuscarrental.service.ReservationService;
import com.revature.oracles.maximuscarrental.service.CarService;
import com.revature.oracles.maximuscarrental.service.UserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("reservations")
public class ReservationController {
    @Autowired
    private ReservationService reservationService;

    @Autowired
    private CarService carService;

    @Autowired
    private UserService userService;

    @GetMapping
    public List<Reservation> getAll() {
        return reservationService.getAll();
    }

    @GetMapping("/{id}")
    public Reservation getReservation(@PathVariable int id) {
        return reservationService.findById(id);
    }

    @GetMapping("/car/{carId}")
    public List<Reservation> getReservationsByCarId(@PathVariable int carId) {
      Car car = carService.findById(carId);
      return reservationService.findByCar(car);
    }

    @GetMapping("/user/{userId}")
    public List<Reservation> getReservationsByUserId(@PathVariable int userId) {
      User user = userService.findById(userId);
      return reservationService.findByUser(user);
    }

    @PostMapping
    public Reservation add(@RequestBody Reservation reservation) {
        return reservationService.add(reservation);
    }
}