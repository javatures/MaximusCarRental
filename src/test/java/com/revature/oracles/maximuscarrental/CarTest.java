package com.revature.oracles.maximuscarrental;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.revature.oracles.maximuscarrental.models.Car;

import org.junit.jupiter.api.Test;

public class CarTest {
    Car car = new Car("Mercury", "Grand Marquis", "2010", "Mid Size Car");

    @Test
    public void checkCarCreated(){
        assertNotNull(car);
    }
}
