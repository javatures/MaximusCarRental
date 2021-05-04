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
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(unique=true)
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

    @OneToMany(mappedBy = "userId")
    private Set<Car> carsRented;

    @Column
    private boolean admin;

    public User(String username, String password, String fname, String lname, String email, String phoneString, boolean admin) {
        this.username = username;
        this.password = password;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.phoneString = phoneString;
        this.admin = admin;
    }
}