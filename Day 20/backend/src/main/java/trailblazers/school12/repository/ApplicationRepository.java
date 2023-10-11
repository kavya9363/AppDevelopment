package trailblazers.school12.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import trailblazers.school12.model.Application;
@Repository
public interface ApplicationRepository extends JpaRepository<Application, Long> {
	//List<Application> findByAName(String aName);
	//Optional<Application> findByAName(String aname);
	Optional<Application> findByFatherName(String fatherName);
	Application findByAid(Long aid);
	void deleteByAid(Long aid);
	//Optional<Application> findByAName(String aName);
}
