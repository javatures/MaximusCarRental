package com.revature.oracles.maximuscarrental;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.revature.oracles.maximuscarrental.models.User;

import org.junit.jupiter.api.Test;

public class UserTest {
    User user = new User("user1", "password", "Steve", "Javatures", "steve@email.com", "123456789", false);

    @Test
    public void checkUserCreated(){
        assertNotNull(user);
    }
}
