package trailblazers.school12.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import trailblazers.school12.model.Order;
@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    void deleteByUserUid(Long uid);

}
