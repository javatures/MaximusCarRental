package com.revature.oracles.maximuscarrental.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.oracles.maximuscarrental.models.Reservation;

public interface ReservationRepo extends JpaRepository<Reservation, Integer>{

}