package com.muthu.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.muthu.demo.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

    void deleteByUserUid(Long uid);

}
