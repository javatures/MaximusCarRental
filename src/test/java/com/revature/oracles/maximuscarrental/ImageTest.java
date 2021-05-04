package com.revature.oracles.maximuscarrental;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.revature.oracles.maximuscarrental.models.Car;
import com.revature.oracles.maximuscarrental.models.Image;

import org.junit.jupiter.api.Test;

public class ImageTest {
    Car car = new Car("Mercury", "Grand Marquis", "2010", "Mid Size Car");
    Image image = new Image("link to image", "description", car);

    @Test
    public void checkImageCreated(){
        assertNotNull(image);
    }
}
