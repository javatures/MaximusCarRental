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

import com.revature.oracles.maximuscarrental.repo.AdminRepo;
import com.revature.oracles.maximuscarrental.models.Admin;


@RestController
@RequestMapping("admin")
public class AdminController {

    @Autowired
    AdminRepo adminRepo;

    @GetMapping
    public List<Admin> getAll(){
        List<Admin> admins = StreamSupport.stream(adminRepo.findAll().spliterator(), false).collect(Collectors.toList());
        return admins;
    } 

    @GetMapping(name = "/{id}")
    public Admin getAdmin(@PathVariable(name = "id") int id)
    {
        return adminRepo.findById(id).get();
    }

    
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Admin postAdmin(@RequestBody Admin admin)
    {
        return adminRepo.save(admin);
    }

  
}
