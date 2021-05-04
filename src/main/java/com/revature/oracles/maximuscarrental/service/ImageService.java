package com.revature.oracles.maximuscarrental.service;

import java.util.List;

import com.revature.oracles.maximuscarrental.exception.NotFoundException;
import com.revature.oracles.maximuscarrental.models.Car;
import com.revature.oracles.maximuscarrental.models.Image;
import com.revature.oracles.maximuscarrental.repo.ImageRepo;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageService {
  private static final Logger log = LogManager.getLogger(ImageService.class);

  @Autowired
  private ImageRepo imageRepo;

  public List<Image> getAll() {
    log.debug("Getting all Images");
    return imageRepo.findAll();
  }

  public Image findById(int id) {
    log.debug("Finding Image with ID: " + id);
    //sending back 404 response if not found
    return imageRepo.findById(id).orElseThrow(() -> new NotFoundException("Image not Found!"));
  }

  public List<Image> findByCar(Car car) {
    log.debug("Finding all Images with car ID: " + car.getId());
    return imageRepo.findAllByCar(car);
  }

  public Image add(Image image) {
    log.debug("Adding image: " + image);
    return imageRepo.save(image);
  }
}
