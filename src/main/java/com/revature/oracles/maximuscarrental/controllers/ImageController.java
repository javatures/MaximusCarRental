package com.revature.oracles.maximuscarrental.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.oracles.maximuscarrental.service.CarService;
import com.revature.oracles.maximuscarrental.service.ImageService;
import com.revature.oracles.maximuscarrental.models.Car;
import com.revature.oracles.maximuscarrental.models.Image;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/image")
public class ImageController {
  
  @Autowired
  private ImageService imageService;

  @Autowired
  private CarService carService;

  @GetMapping
  public List<Image> getAll() {
    return imageService.getAll();
  }

  @GetMapping("/{id}")
  public Image getImage(@PathVariable int id) {
    return imageService.findById(id);
  }

  @GetMapping("/car/{carId}")
  public List<Image> getImagesByCarId(@PathVariable int carId) {
    Car car = carService.findById(carId);
    return imageService.findByCar(car);
  }

  @PostMapping
  public Image add(@RequestBody Image image) {
    return imageService.add(image);
  }
  
}