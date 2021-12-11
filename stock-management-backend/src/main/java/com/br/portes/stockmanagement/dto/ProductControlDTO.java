package com.br.portes.stockmanagement.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductControlDTO {

    private String description;
    private String brand;
    private Long barcode;
    private LocalDate expirationDate;
    private Long currentQuantity;
    private Long minAlert;
}
