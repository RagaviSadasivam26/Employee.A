import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee, EmployeeService } from '../util/employee.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit{
  employee: Employee |undefined;
  
  constructor(
    private route: ActivatedRoute, // tool for handling dynamic route data and navigation
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {    
    let empId = this.route.snapshot.paramMap.get('id')
    const employeesData = this.employeeService.getEmployees();
    if (empId!= null) {
      const employeeId = empId
      this.employee = this.employeeService.getEmployeeById(parseInt(employeeId));
    }    
  }

  onSave() {
    if (this.employee) {
      this.employeeService.updateEmployee(this.employee);
      alert('Employee updated successfully!');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Employee data is not available.');
    }
  }
}
