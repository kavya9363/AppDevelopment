package trailblazers.school12.service;

import trailblazers.school12.dto.request.ApplicationRequest;
import trailblazers.school12.dto.response.ApplicationResponse;
import trailblazers.school12.model.Application;

import java.util.*;
public interface ApplicationService {
	
	boolean saveApplication(ApplicationRequest request);
	List<ApplicationResponse> getAllApplications();
	ApplicationResponse getApplication(Long aid);
	ApplicationResponse updateApplication(ApplicationRequest request,Long aid);
	boolean deleteApplication(Long aid);
	Application getApplicationModelId(Long aid);

}
