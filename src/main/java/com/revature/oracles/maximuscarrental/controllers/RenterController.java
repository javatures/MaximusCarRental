package com.revature.oracles.maximuscarrental.controllers;

import java.util.List;
import java.util.stream.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.MediaType;

import com.revature.oracles.maximuscarrental.repo.RenterRepo;
import com.revature.oracles.maximuscarrental.models.Renter;

@RestController
@RequestMapping("renter")
public class RenterController 
{
    @Autowired
    RenterRepo renterRepo;

    @GetMapping
    public List<Renter> getAll()
    {
        List<Renter> renters = StreamSupport.stream(renterRepo.findAll().spliterator(), false).collect(Collectors.toList());
        return renters;
    }

    @GetMapping(name = "/{id}")
    public Renter getRenter(@PathVariable(name = "id") int id)
    {
        return renterRepo.findById(id).get();
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Renter postRenter(@RequestBody Renter renter)
    {
        return renterRepo.save(renter);
    }
}