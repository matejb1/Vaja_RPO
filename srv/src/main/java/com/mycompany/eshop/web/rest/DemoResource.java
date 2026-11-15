package com.mycompany.eshop.web.rest;

import com.mycompany.eshop.dto.DemoDTO;
import com.mycompany.eshop.service.DemoService;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/demo")
public class DemoResource {

    private final DemoService demoService;

    DemoResource(DemoService demoService) {
        this.demoService = demoService;
    }

    @GetMapping(path = "/test")
    @ApiResponse(responseCode = "200",
        description = "Test endpoint",
        content = {
        @Content(
            schema= @Schema(implementation = DemoDTO.class, description = "Demo DTO"),
            mediaType =  "application/json"
        )
    })
    public DemoDTO getDemoDTO() {
        return this.demoService.getDemoDTO();
    }


    @GetMapping(path = "/testdb/{id}")
    @ApiResponse(responseCode = "200",
        description = "Test endpoint fetch from db",
        content = {
            @Content(
                schema= @Schema(implementation = DemoDTO.class, description = "Demo DTO"),
                mediaType =  "application/json"
            )
        })
    public Optional<DemoDTO> getDemoFromDBDTO(@PathVariable(name = "id")  Long id) {
        return this.demoService.getDemoFromDBDTO(id);
    }

}
