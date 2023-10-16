package com.muthu.demo.dto.request;

import java.util.List;

import com.muthu.demo.dto.info.ProductInfo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderRequest {
    private String orderAddress;
    private String paymentMode;
    private Long uid;
    private List<ProductInfo> products;
}
