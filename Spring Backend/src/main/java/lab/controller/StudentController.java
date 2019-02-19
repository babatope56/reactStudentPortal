package lab.controller;

import java.util.List;

import org.hibernate.validator.constraints.Email;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import entity.Student;
import repository.StudentRepository;

@RestController
@CrossOrigin
public class StudentController {
	

	@Autowired
	private StudentRepository studentRepository;
	
	@RequestMapping(value="/submitStudentDetails",
			consumes=MediaType.APPLICATION_JSON_VALUE,
			method=RequestMethod.POST)
	
	public void submitStudentDetails(@RequestBody Student student) {
		studentRepository.save(student);
			
		
	}
	@RequestMapping(value="/findStudentByEmail",
			 consumes=MediaType.APPLICATION_JSON_VALUE,
			 produces=MediaType.APPLICATION_JSON_VALUE,
			 method= RequestMethod.GET)
	@ResponseBody
		private ResponseEntity<Student> findStudent(String email){
		
		Student student = studentRepository.findOne(email);
			return new ResponseEntity<Student>(student, HttpStatus.OK);
			
		}

	@RequestMapping(value="/findAllStudents",
			produces=MediaType.APPLICATION_JSON_VALUE,
			method= RequestMethod.GET)
	@ResponseBody
		private ResponseEntity<List<Student>> findAll(){
		List<Student> student = studentRepository.findAll();
			return new ResponseEntity<>(student, HttpStatus.OK);
	}
		
	@RequestMapping(value="/login",
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE,
			method= RequestMethod.POST)
	
	public ResponseEntity<Student> login(@RequestBody Student student) {
		
		Student tempStudent = studentRepository.findOne(student.getEmail());
		
		if(tempStudent != null) {
			if(student.getPassword().equals(tempStudent.getPassword())) {
				return new ResponseEntity<>(tempStudent,HttpStatus.OK);
			}
		}
			return new ResponseEntity <> (HttpStatus.UNAUTHORIZED);
	}
	
}
		
		
		
	
		
	
	

	



	






	
	


