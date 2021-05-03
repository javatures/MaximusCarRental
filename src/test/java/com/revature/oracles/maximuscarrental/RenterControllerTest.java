package com.revature.oracles.maximuscarrental;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

public class RenterControllerTest extends MaximuscarrentalApplicationTests{
    @Autowired
    private WebApplicationContext webApplicationContext;
    
    private MockMvc mockMvc;

    @BeforeEach
    public void setup() {
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

    @Test
    public void allRenterTest() throws Exception {
        mockMvc.perform(get("/renter")).andExpect(status().isOk());
    }
    
    // Will un comment when create account button is complete
    // @Test
    // public void oneRenterTest() throws Exception {
    //     //Will fail if DB is empty
    //     mockMvc.perform(get("/renter/1")).andExpect(status().isOk());
    // }
}
