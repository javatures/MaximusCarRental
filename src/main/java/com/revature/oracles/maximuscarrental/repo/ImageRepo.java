package com.revature.oracles.maximuscarrental.repo;

import java.util.List;

import com.revature.oracles.maximuscarrental.models.Image;
import com.revature.oracles.maximuscarrental.models.Car;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepo extends JpaRepository<Image, Integer>{
  List<Image> findAllByCar(Car car);
}