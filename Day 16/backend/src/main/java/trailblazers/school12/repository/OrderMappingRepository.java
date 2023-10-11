package trailblazers.school12.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import trailblazers.school12.model.OrderMapping;
@Repository
public interface OrderMappingRepository extends JpaRepository<OrderMapping, Long> {

}
