package com.revature.oracles.maximuscarrental.models;

import java.util.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "renters")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Renter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String username;

    @Column
    private String password;

    @Column
    private String fname;

    @Column
    private String lname;

    @Column
    private String email;

    @Column
    private String phoneString;

    @OneToMany(mappedBy = "renterId")
    private Set<Car> carsRented;

    public Renter(String username, String password, String fname, String lname, String email, String phoneString) {
        this.username = username;
        this.password = password;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.phoneString = phoneString;
    }
}