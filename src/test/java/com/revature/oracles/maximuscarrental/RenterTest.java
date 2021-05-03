package com.revature.oracles.maximuscarrental;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.revature.oracles.maximuscarrental.models.Renter;

import org.junit.jupiter.api.Test;

public class RenterTest {
    Renter renter = new Renter("renter1", "password", "Steve", "Renter", "steve@test.com", "123456789");

    @Test
    public void checkRenterCreated(){
        assertNotNull(renter);
    }
}
