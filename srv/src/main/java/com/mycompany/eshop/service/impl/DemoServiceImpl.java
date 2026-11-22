package com.mycompany.eshop.service.impl;

import com.mycompany.eshop.domain.Demo;
import com.mycompany.eshop.dto.DemoDTO;
import com.mycompany.eshop.exception.BusinessErrorCode;
import com.mycompany.eshop.exception.RuleViolationException;
import com.mycompany.eshop.repository.DemoRepository;
import com.mycompany.eshop.service.DemoService;
import com.mycompany.eshop.service.mapper.DemoMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
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
        d.setDate(LocalDate.now());
        d.setDateTime(LocalDateTime.now());
        return d;
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<DemoDTO> getDemoFromDBDTO(Long id) {
        return demoRepository.findById(id).map(d -> demoMapper.toDto(d));
    }

    @Override
    public Optional<DemoDTO> getDemoExtDBDTO(Long id) {
        // throw new RuleViolationException(BusinessErrorCode.PRODUCT_NOT_EXISTS);
        throw new RuleViolationException(BusinessErrorCode.PRODUCT_NOT_AVAILABLE, "iPhone", "Crnuce");
    }
}
