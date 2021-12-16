package com.br.portes.stockmanagement.service.control;

import com.br.portes.stockmanagement.dto.ProductControlDTO;
import com.br.portes.stockmanagement.exception.MyException;
import com.br.portes.stockmanagement.model.entity.ProductControl;
import com.br.portes.stockmanagement.model.repository.ControlRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class ControlServiceImpl implements ControlService {

    private final ControlRepository repository;

    @Autowired
    public ControlServiceImpl(ControlRepository repository) {
        this.repository = repository;
    }

    @Override
    public ProductControl registerProduct(ProductControl productControl) {
        productAlreadyExists(productControl);
        return repository.save(productControl);
    }

    @Override
    public List<ProductControl> searchProduct(ProductControl filter) {
        Example<ProductControl> example =  Example.of(filter, ExampleMatcher.matching()
                .withIgnoreCase()
                .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING));

        return repository.findAll(example);
    }

    @Override
    public ProductControl updateProductControl(ProductControl productControl) {
        Objects.requireNonNull(productControl.getId());
        return repository.save(productControl);
    }

    @Override
    public void deleteProduct(ProductControl productControl) {
        if (repository.existsById(productControl.getId())) {
            repository.delete(productControl);
        } else {
            throw new MyException("This product not exists");
        }
    }

    @Override
    public void deleteProductById(Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
        } else {
            throw new MyException("This product id not exists");
        }
    }

    @Override
    public void productAlreadyExists(ProductControl productControl) {
        if (repository.existsByBarcode(productControl.getBarcode())) {
            throw new MyException("This product already exists by this barcode!");
        }
        if (repository.existsByDescription(productControl.getDescription()) && repository.existsByBrand(productControl.getBrand())) {
            throw new MyException("This product description and brand already exists!");
        }
    }

    public List<ProductControl> findAll() {
        return repository.findAll();
    }
}
