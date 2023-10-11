package trailblazers.school12.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import trailblazers.school12.dto.request.ApplicationRequest;
import trailblazers.school12.dto.response.ApplicationResponse;
import trailblazers.school12.model.Application;
import trailblazers.school12.repository.ApplicationRepository;
import trailblazers.school12.service.ApplicationService;
@Service
@Transactional
@RequiredArgsConstructor
public class ApplicationServiceImpl implements ApplicationService {
	private final ApplicationRepository applicationRepository;

	@Override
	public boolean saveApplication(ApplicationRequest request) {
		if (applicationRepository.findByFatherName(request.getFatherName()).isPresent()) {
            return false;
        }
		Application application = Application.builder()
                .aName(request.getAName())
                .fatherName(request.getFatherName())
                .motherName(request.getMotherName())
                .mobile(request.getMobile())
                .gender(request.getGender())
                .bloodgroup(request.getBloodgroup())
                .religion(request.getReligion())
                .nationality(request.getNationality())
                .email(request.getEmail())
                .currentadd(request.getCurrentadd())
                .permanentadd(request.getPermanentadd())
                .board(request.getBoard())
                .rollno(request.getRollno())
                .result(request.getResult())
                .passingyr(request.getPassingyr())
                .grade(request.getPassingyr())
                .addyr(request.getAddyr())
                .boardnext(request.getBoardnext())
                .groupname(request.getGroupname())
                .build();

		applicationRepository.save(application);
        return true;
	}

	@Override
	public List<ApplicationResponse> getAllApplications() {
		List<Application> applicationList = applicationRepository.findAll();
		return applicationList.stream()
				.map(this::mapApplicationToResponse)
				.collect(Collectors.toList());
	}

	@Override
	public ApplicationResponse getApplication(Long aid) {
		Application application = applicationRepository.findByAid(aid);
		return mapApplicationToResponse(application);
	}

	@Override
	public ApplicationResponse updateApplication(ApplicationRequest request, Long aid) {
		Application application = applicationRepository.findByAid(aid);
		if(application!=null) {
			application.setAName(request.getAName());
			application.setFatherName(request.getFatherName());
			application.setMotherName(request.getMotherName());
			application.setMobile(request.getMobile());
			application.setGender(request.getGender());
			application.setBloodgroup(request.getBloodgroup());
			application.setReligion(request.getReligion());
			application.setNationality(request.getNationality());
			application.setEmail(request.getEmail());
			application.setCurrentadd(request.getCurrentadd());
			application.setPermanentadd(request.getPermanentadd());
			application.setBoard(request.getBoard());
			application.setRollno(request.getRollno());
			application.setResult(request.getResult());
			application.setPassingyr(request.getPassingyr());
			application.setGrade(request.getGrade());
			application.setAddyr(request.getAddyr());
			application.setBoardnext(request.getBoardnext());
			application.setGroupname(request.getGroupname());
			
			applicationRepository.save(application);
			
			return mapApplicationToResponse(application);
		}
		else {
			throw new EntityNotFoundException("Application with aid " + aid + " not found");
		}
	}

	@Override
	public boolean deleteApplication(Long aid) {
		Application application = applicationRepository.findByAid(aid);
		if(application!=null) {
			applicationRepository.deleteByAid(aid);
			return true;
		}else {
			return false;
		}
	}

	@Override
	public Application getApplicationModelId(Long aid) {
		return applicationRepository.findByAid(aid);
	}
	
	
	private ApplicationResponse mapApplicationToResponse(Application application) {
		return ApplicationResponse.builder()
				.aid(application.getAid())
				.aName(application.getAName())
				.fatherName(application.getFatherName())
                .motherName(application.getMotherName())
                .mobile(application.getMobile())
                .gender(application.getGender())
                .bloodgroup(application.getBloodgroup())
                .religion(application.getReligion())
                .nationality(application.getNationality())
                .email(application.getEmail())
                .currentadd(application.getCurrentadd())
                .permanentadd(application.getPermanentadd())
                .board(application.getBoard())
                .rollno(application.getRollno())
                .result(application.getResult())
                .passingyr(application.getPassingyr())
                .grade(application.getPassingyr())
                .addyr(application.getAddyr())
                .boardnext(application.getBoardnext())
                .groupname(application.getGroupname())
				.build();
	}
	

}
