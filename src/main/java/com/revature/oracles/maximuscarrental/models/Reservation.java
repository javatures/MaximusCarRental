package com.revature.oracles.maximuscarrental.models;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "reservations")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String pickUp;

    @Column
    private String dropOff;
    
    @ManyToOne
    @JoinColumn
    private Car car;

    @ManyToOne
    @JoinColumn
    private User user;

    public Reservation(String pickUp, String dropOff, Car car, User user) {
      this.pickUp = pickUp;
      this.dropOff = dropOff;
      this.car = car;
      this.user = user;
    }
}