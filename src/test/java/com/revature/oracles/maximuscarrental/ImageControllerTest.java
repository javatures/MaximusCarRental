package com.revature.oracles.maximuscarrental;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

public class ImageControllerTest extends MaximuscarrentalApplicationTests{
    @Autowired
    private WebApplicationContext webApplicationContext;
    
    private MockMvc mockMvc;

    @BeforeEach
    public void setup() {
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

    @Test
    public void allImageTest() throws Exception {
        mockMvc.perform(get("/image")).andExpect(status().isOk());
    }
    
    // Will un comment when complete
    // @Test
    // public void oneImageTest() throws Exception {
    //     //Will fail if DB is empty
    //     mockMvc.perform(get("/image/1")).andExpect(status().isOk());
    // }
}
