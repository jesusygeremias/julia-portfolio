package com.juliaportfolio.backend.juliaportfoliorest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UsersController {

    @RequestMapping(value = "/api/username")
    public String getUserName() {
        return "Ejemplo";
    }

}
