package trailblazers.school12.service;

import java.util.List;

import trailblazers.school12.dto.request.ProductRequest;
import trailblazers.school12.dto.response.ProductResponse;
import trailblazers.school12.model.Product;

public interface ProductService {

    boolean saveProduct(ProductRequest request);

    List<ProductResponse> getAllProducts();

    ProductResponse getProduct(Long pid);

    ProductResponse updateProduct(ProductRequest request, Long pid);

    boolean deleteProduct(Long pid);

    Product getProductModelId(Long pid);

}

