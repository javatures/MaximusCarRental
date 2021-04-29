package com.revature.oracles.maximuscarrental.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "cars")
@Getter
@Setter
@NoArgsConstructor
public class Car {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  @Column
  private String make;

  @Column
  private String model;

  @Column
  private String year;

  @Column
  private String type; // i.e. luxury vehicle

  @ManyToOne
  @JoinColumn
  private Renter renterId;
}