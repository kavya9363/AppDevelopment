package trailblazers.school12.service;

import trailblazers.school12.dto.request.OrderRequest;

public interface OrderService {

    boolean saveOrder(OrderRequest request);

}
