package com.br.portes.stockmanagement.service.control;

import com.br.portes.stockmanagement.model.entity.ProductControl;

import java.util.List;

public interface ControlService {

    ProductControl registerProduct(ProductControl productControl);

    List<ProductControl> searchProduct(ProductControl productControl);

    ProductControl updateProductControl(ProductControl productControl);

    void productAlreadyExists(ProductControl productControl);

    void deleteProductById(Long id);

    void deleteProduct(ProductControl productControl);
}
