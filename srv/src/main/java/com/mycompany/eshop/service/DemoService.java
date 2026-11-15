package com.mycompany.eshop.service;


import com.mycompany.eshop.dto.DemoDTO;

import java.util.Optional;

public interface DemoService {
    DemoDTO getDemoDTO();
    Optional<DemoDTO> getDemoFromDBDTO(Long id);
}
