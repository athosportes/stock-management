package com.br.portes.stockmanagement.service.control.converter;

import com.br.portes.stockmanagement.dto.ProductControlDTO;
import com.br.portes.stockmanagement.model.entity.ProductControl;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class ProductControlConverterDTO {


    public ProductControl converterDTO(ProductControlDTO dto) {
        return ProductControl.builder()
                .description(dto.getDescription())
                .brand(dto.getBrand())
                .barcode(dto.getBarcode())
                .expirationDate(LocalDate.now())
                .currentQuantity(dto.getCurrentQuantity())
                .minAlert(dto.getMinAlert())
                .build();
    }
}
