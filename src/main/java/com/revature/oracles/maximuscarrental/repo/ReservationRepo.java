package com.revature.oracles.maximuscarrental.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import com.revature.oracles.maximuscarrental.models.Reservation;
import com.revature.oracles.maximuscarrental.models.Car;
import com.revature.oracles.maximuscarrental.models.User;

public interface ReservationRepo extends JpaRepository<Reservation, Integer>{
  List<Reservation> findAllByCar(Car car);
  List<Reservation> findAllByUser(User user);
}