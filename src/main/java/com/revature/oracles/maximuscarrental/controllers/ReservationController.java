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

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("reservations")
public class ReservationController {
    @Autowired
    ReservationRepo reservationRepo;

    @GetMapping
    public List<Reservation> getAll() {
        List<Reservation> reservations = StreamSupport.stream(reservationRepo.findAll().spliterator(), false)
            .collect(Collectors.toList());
        return reservations;
    }

    @GetMapping("/{id}")
    public Reservation getReservation(@PathVariable(name = "id") int id) {
        return reservationRepo.findById(id).get();
    }

    @PostMapping
    public Reservation postReservation(@RequestBody Reservation reservation) {
        return reservationRepo.save(reservation);
    }
}