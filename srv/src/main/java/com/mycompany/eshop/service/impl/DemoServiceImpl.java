package com.mycompany.eshop.service.impl;

import com.mycompany.eshop.domain.Demo;
import com.mycompany.eshop.dto.DemoDTO;
import com.mycompany.eshop.repository.DemoRepository;
import com.mycompany.eshop.service.DemoService;
import com.mycompany.eshop.service.mapper.DemoMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class DemoServiceImpl implements DemoService {

    private final DemoRepository demoRepository;
    private final DemoMapper demoMapper;

    DemoServiceImpl(DemoRepository demoRepository, DemoMapper demoMapper) {
        this.demoRepository = demoRepository;
        this.demoMapper = demoMapper;
    }

    @Override
    @Transactional(readOnly = true)
    public DemoDTO getDemoDTO() {
        DemoDTO d = new DemoDTO();
        d.setId(67L);
        d.setName("Lolek");
        return d;
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<DemoDTO> getDemoFromDBDTO(Long id) {
        return demoRepository.findById(id).map(d -> demoMapper.toDto(d));
    }
}
