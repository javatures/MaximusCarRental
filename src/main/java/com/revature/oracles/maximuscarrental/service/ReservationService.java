package com.revature.oracles.maximuscarrental.service;

import java.util.List;

import com.revature.oracles.maximuscarrental.exception.NotFoundException;
import com.revature.oracles.maximuscarrental.models.Car;
import com.revature.oracles.maximuscarrental.models.User;
import com.revature.oracles.maximuscarrental.models.Reservation;
import com.revature.oracles.maximuscarrental.repo.ReservationRepo;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservationService {
  private static final Logger log = LogManager.getLogger(ReservationService.class);

  @Autowired
  private ReservationRepo reservationRepo;

  public List<Reservation> getAll() {
    log.debug("Getting all Reservations");
    return reservationRepo.findAll();
  }

  public Reservation findById(int id) {
    log.debug("Finding Reservation with ID: " + id);
    //sending back 404 response if not found
    return reservationRepo.findById(id).orElseThrow(() -> new NotFoundException("Reservation not Found!"));
  }

  public List<Reservation> findByCar(Car car) {
    log.debug("Finding all Reservations with car ID: " + car.getId());
    return reservationRepo.findAllByCar(car);
  }

  public List<Reservation> findByUser(User user) {
    log.debug("Finding all Reservations with user ID: " + user.getId());
    return reservationRepo.findAllByUser(user);
  }

  public Reservation add(Reservation reservation) {
    log.debug("Adding reservation: " + reservation);
    return reservationRepo.save(reservation);
  }
}
