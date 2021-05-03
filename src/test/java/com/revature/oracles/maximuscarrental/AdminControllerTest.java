package com.revature.oracles.maximuscarrental;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

public class AdminControllerTest extends MaximuscarrentalApplicationTests{
    @Autowired
    private WebApplicationContext webApplicationContext;
    
    private MockMvc mockMvc;

    @BeforeEach
    public void setup() {
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

    @Test
    public void allAdminTest() throws Exception {
        mockMvc.perform(get("/admin")).andExpect(status().isOk());
    }
    
    // Will un comment when registering an admin is complete
    // @Test
    // public void oneAdminTest() throws Exception {
    //     //Will fail if DB is empty
    //     mockMvc.perform(get("/admin/1")).andExpect(status().isOk());
    // }
}
