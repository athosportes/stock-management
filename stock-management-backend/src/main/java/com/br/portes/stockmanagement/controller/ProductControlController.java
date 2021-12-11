package com.br.portes.stockmanagement.controller;

import com.br.portes.stockmanagement.dto.ProductControlDTO;
import com.br.portes.stockmanagement.exception.MyException;
import com.br.portes.stockmanagement.model.entity.ProductControl;
import com.br.portes.stockmanagement.service.control.ControlServiceImpl;
import com.br.portes.stockmanagement.service.control.converter.ProductControlConverterDTO;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@RestController
@RequestMapping("/api/product-control")
public class ProductControlController {

    @Autowired
    private ControlServiceImpl service;

    @Autowired
    private ProductControlConverterDTO productControlConverterDTO;

    @PostMapping("/create-product")
    @Transactional
    public ResponseEntity<ProductControl> createProductControl(@RequestBody ProductControlDTO dto) {
        ProductControl productConverted = productControlConverterDTO.converterDTO(dto);
        ProductControl savedProduct = service.registerProduct(productConverted);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }

    @PostMapping("update-product-control")
    public ResponseEntity<ProductControl> updateProductControl(@RequestBody ProductControlDTO dto) {
        ProductControl productConverted = productControlConverterDTO.converterDTO(dto);
        try {
            ProductControl savedProduct = service.updateProductControl(productConverted);
            return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
        } catch (Exception ex) {
            throw new MyException(ex.getMessage());
        }
    }

    @DeleteMapping("delete/{id}")
    @Transactional
    public ResponseEntity<Void> deleteProductIdControl(@PathVariable Long id) {
        try {
            service.deleteProductById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (MyException ex) {
            throw new MyException(ex.getMessage());
        }
    }

    @DeleteMapping("delete")
    @Transactional
    public ResponseEntity<Void> deleteProductControl(@RequestBody ProductControlDTO dto) {
        ProductControl productConverted = productControlConverterDTO.converterDTO(dto);
        try {
            service.deleteProduct(productConverted);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (MyException ex) {
            throw new MyException(ex.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity searchProduct(
            @RequestParam(value = "description", required = false) String description,
            @RequestParam(value = "brand", required = false) String brand,
            @RequestParam(value = "barcode", required = false) Long barcode,
            @RequestParam(value = "expirationDate", required = false) LocalDate expirationDate) {

        ProductControl filter = new ProductControl();
        filter.setDescription(description);
        filter.setBrand(brand);
        filter.setBarcode(barcode);
        filter.setExpirationDate(expirationDate);

        List<ProductControl> filteredList = service.searchProduct(filter);
        return ResponseEntity.ok(filteredList);
    }

    @GetMapping("find-all")
    public List<ProductControl> findAll(){
        return service.findAll();
    }

}
