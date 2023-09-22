import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee, EmployeeService } from '../util/employee.service';
import { User } from '../util/user.role';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  searchTerm: string = '';
  loggedInUser!: User;

  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
    this.filteredEmployees = [...this.employees];
    this.loggedInUser = this.employeeService.getLoggedInUser();
  }

  onLogout() {
    this.router.navigate(['/signin']);
  }

  onAddNew() {
    this.router.navigate(['/add-employee']);
  }

  onDelete(id: number) {
    this.employeeService.deleteEmployee(id);
    this.employees = this.employeeService.getEmployees();
  }

  filterEmployees() {
    if (this.searchTerm.trim()) {
      this.filteredEmployees = this.employees.filter
      (
        (employee) =>
          employee.firstName
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase()) ||
          employee.lastName
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase()) 
      );
    } else {
      this.filteredEmployees = [...this.employees];
    }
  }
}
