package trailblazers.school12.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ApplicationResponse {
	private Long aid;
	private String aName;
    private String fatherName;
	private String motherName;
	private String mobile;
	private String gender;
	private String bloodgroup;
	private String religion;
	private String nationality;
	private String email;
	private String currentadd;
	private String permanentadd;
	private String board;
	private String rollno;
	private String result;
	private String passingyr;
	private String grade;
	private String addyr;
	private String boardnext;
	private String groupname;
	

}

