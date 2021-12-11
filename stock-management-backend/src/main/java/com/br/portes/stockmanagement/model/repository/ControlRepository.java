package com.br.portes.stockmanagement.model.repository;


import com.br.portes.stockmanagement.model.entity.ProductControl;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ControlRepository extends JpaRepository<ProductControl, Long> {

    boolean existsByBrand( String brand);

    boolean existsByBarcode(Long barcode );

    boolean existsByDescription( String description );
}
