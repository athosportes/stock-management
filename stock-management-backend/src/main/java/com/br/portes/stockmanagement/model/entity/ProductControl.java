package com.br.portes.stockmanagement.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "control", schema = "stock")
public class ProductControl {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    //@JsonIgnore
    private Long id;

    @Column(name = "description")
    private String description;

    @Column(name = "brand")
    private String brand;

    @Column(name = "barcode")
    private Long barcode;

    @Column(name = "expiration_date")
    private LocalDate expirationDate;

    @Column(name = "current_quantity")
    private Long currentQuantity;

    @Column(name = "min_alert")
    private Long minAlert;

}
