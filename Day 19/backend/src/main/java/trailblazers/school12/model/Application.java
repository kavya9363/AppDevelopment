package trailblazers.school12.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_application")
public class Application {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long aid;
	
	@Column(length = 250,nullable=false)
	private String aName;
	
	@Column(length = 250, nullable = false)
    private String fatherName;
	
	@Column(nullable=false)
	private String motherName;
	
	@Column(nullable=false)
	private String mobile;
	
	@Column(nullable=false)
	private String gender;
	
	@Column(nullable=false)
	private String bloodgroup;
	
	@Column(nullable=false)
	private String religion;
	
	@Column(nullable=false)
	private String nationality;
	
	@Column(nullable=false)
	private String email;
	
	@Column(nullable=false)
	private String currentadd;
	
	@Column(nullable=false)
	private String permanentadd;
	
	@Column(nullable=false)
	private String board;
	
	@Column(nullable=false)
	private String rollno;
	
	@Column(nullable=false)
	private String result;
	
	@Column(nullable=false)
	private String passingyr;
	
	@Column(nullable=false)
	private String grade;
	
	@Column(nullable=false)
	private String addyr;
	
	@Column(nullable=false)
	private String boardnext;
	
	@Column(nullable=false)
	private String groupname;
	
	
	

}
