import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee, EmployeeService } from '../util/employee.service';

@Component({
  selector: 'add-employee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
  newEmployee: Employee = { id: 0, firstName: '', lastName: '', dob: '', qualification: '', gender: '', bloodGroup: '' };

  constructor(private router: Router, private employeeService: EmployeeService) {}

  onSave() {
    this.newEmployee.id = Date.now();  // for unique id generation 
    this.employeeService.addEmployee(this.newEmployee);
    this.router.navigate(['/dashboard']);
  }
  
}
