package com.revature.oracles.maximuscarrental.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.oracles.maximuscarrental.models.Renter;

public interface RenterRepo extends JpaRepository<Renter, Integer>{

}