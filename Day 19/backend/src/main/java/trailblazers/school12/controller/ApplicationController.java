package trailblazers.school12.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import trailblazers.school12.constant.Api;
import trailblazers.school12.dto.request.ApplicationRequest;
import trailblazers.school12.dto.response.ApplicationResponse;
import trailblazers.school12.service.ApplicationService;

@RestController
@RequestMapping(Api.APPLICATION)
@RequiredArgsConstructor
@Tag(name = "application")
public class ApplicationController {
	private final ApplicationService applicationService;
	
	@PostMapping("/save")
	public ResponseEntity<String> saveApplication(@RequestBody ApplicationRequest request){
		boolean isSaved = applicationService.saveApplication(request);
		return isSaved ? ResponseEntity.status(201).body("Application Form Submitted")
				: ResponseEntity.badRequest().build();
	}
	@GetMapping("/all")
	public ResponseEntity<List<ApplicationResponse>> getApplications(){
		List<ApplicationResponse> applicationList = applicationService.getAllApplications();
		return !applicationList.isEmpty() ? ResponseEntity.status(200).body(applicationList)
				: ResponseEntity.noContent().build();
	}
	
	@GetMapping("/{aid}")
	public ResponseEntity<ApplicationResponse> getApplication(@PathVariable Long aid){
		ApplicationResponse applicationResponse = applicationService.getApplication(aid);
		return applicationResponse !=null ? ResponseEntity.ok().body(applicationResponse)
				:ResponseEntity.notFound().build();
	}
	 @PutMapping("/update/{aid}")
	    public ResponseEntity<ApplicationResponse> updateApplication(@RequestBody ApplicationRequest request, @PathVariable Long aid) {
		 ApplicationResponse applicationResponse = applicationService.updateApplication(request, aid);
	        return applicationResponse!= null ? ResponseEntity.ok().body(applicationResponse) 
	        		: ResponseEntity.notFound().build();
	 }
	 @DeleteMapping("/delete/{aid}")
	    public ResponseEntity<String> deleteApplication(@PathVariable Long aid) {
	        boolean isDeleted = applicationService.deleteApplication(aid);
	        return isDeleted ? ResponseEntity.ok().body("Application deleted successfully!")
	                : ResponseEntity.notFound().build();
	    }
	

}
