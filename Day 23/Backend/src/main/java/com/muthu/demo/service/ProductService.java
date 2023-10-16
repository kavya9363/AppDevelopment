package com.muthu.demo.service;

import java.util.List;

import com.muthu.demo.dto.request.ProductRequest;
import com.muthu.demo.dto.response.ProductResponse;
import com.muthu.demo.model.Product;

public interface ProductService {

    boolean saveProduct(ProductRequest request);

    List<ProductResponse> getAllProducts();

    ProductResponse getProduct(Long pid);

    ProductResponse updateProduct(ProductRequest request, Long pid);

    boolean deleteProduct(Long pid);

    Product getProductModelId(Long pid);

}
