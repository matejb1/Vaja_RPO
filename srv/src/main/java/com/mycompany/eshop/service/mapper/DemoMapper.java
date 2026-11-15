package com.mycompany.eshop.service.mapper;

import com.mycompany.eshop.domain.Demo;
import com.mycompany.eshop.dto.DemoDTO;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface DemoMapper {
    DemoDTO toDto(Demo entity);
    Demo toEntity(DemoDTO dto);
    void updateEntityFromDto(DemoDTO dto, @MappingTarget Demo entity);
}
