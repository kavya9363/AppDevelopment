package com.muthu.demo.service;

import java.util.List;

import com.muthu.demo.dto.request.OrderRequest;
import com.muthu.demo.dto.response.OrderResponse;

public interface OrderService {

    boolean saveOrder(OrderRequest request);

	List<OrderResponse> getOrders(Long uid);

}
