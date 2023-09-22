import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { users,User } from './user.role';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  dob: string;
  qualification: string;
  gender: string;
  bloodGroup: string;
}


@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private rout: Router) {
    if (!localStorage.getItem('employees')) {
      this.initializeDummyEmployees();
    }
  }
  login(user: string, pass: string): number {
    const foundUser = users.find(u => u.username === user && u.password === pass);
    if (foundUser) {
      this.setLoggedInUser(foundUser);
        return 200; // OK
    } else {
        return 403; // errors
    }
}

  logout() {
    this.rout.navigate(['signin']);
  }

  initializeDummyEmployees() {
    const dummyEmployees: Employee[] = [
      
      {
        id: 100021,
        firstName: 'Oscar',
        lastName: 'Green',
        dob: '1990-04-25',
        qualification: 'MBA',
        gender: 'Male',
        bloodGroup: 'B+',
      },
      {
        id: 100022,
        firstName: 'Ella',
        lastName: 'Taylor',
        dob: '1987-12-12',
        qualification: 'BCom',
        gender: 'Female',
        bloodGroup: 'O-',
      },
      {
        id: 100023,
        firstName: 'James',
        lastName: 'Johnson',
        dob: '1992-02-28',
        qualification: 'PhD',
        gender: 'Male',
        bloodGroup: 'AB+',
      },
      {
        id: 100024,
        firstName: 'Olivia',
        lastName: 'Martin',
        dob: '1988-08-19',
        qualification: 'BSc',
        gender: 'Female',
        bloodGroup: 'A-',
      },
      {
        id: 100025,
        firstName: 'Liam',
        lastName: 'Lee',
        dob: '1985-09-17',
        qualification: 'MSc',
        gender: 'Male',
        bloodGroup: 'A+',
      },
      {
        id: 100026,
        firstName: 'Sophia',
        lastName: 'Garcia',
        dob: '1994-01-21',
        qualification: 'BA',
        gender: 'Female',
        bloodGroup: 'B+',
      },
      {
        id: 100027,
        firstName: 'Benjamin',
        lastName: 'Wilson',
        dob: '1989-11-30',
        qualification: 'PhD',
        gender: 'Male',
        bloodGroup: 'O+',
      },
      {
        id: 100028,
        firstName: 'Charlotte',
        lastName: 'Lopez',
        dob: '1990-05-15',
        qualification: 'MBA',
        gender: 'Female',
        bloodGroup: 'AB-',
      },
      {
        id: 100029,
        firstName: 'Ethan',
        lastName: 'Harris',
        dob: '1986-07-03',
        qualification: 'BCom',
        gender: 'Male',
        bloodGroup: 'A-',
      },
      {
        id: 100030,
        firstName: 'Ava',
        lastName: 'Clark',
        dob: '1993-08-10',
        qualification: 'MSc',
        gender: 'Female',
        bloodGroup: 'B-',
      },
    ];

    localStorage.setItem('employees', JSON.stringify(dummyEmployees));
  }

  getEmployees(): Employee[] {
    const employees = localStorage.getItem('employees');
    return employees ? JSON.parse(employees) : [];
  }

  addEmployee(employee: Employee) {
    const employees = this.getEmployees();
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
  }

  getEmployeeById(id: number): Employee | undefined {
    const employees = this.getEmployees();
    return employees.find((emp) => emp.id === id);
  }

  updateEmployee(updatedEmployee: Employee) {
    const employees = this.getEmployees();
    const index = employees.findIndex((emp) => emp.id === updatedEmployee.id);
    if (index !== -1) {
      employees[index] = updatedEmployee;
      localStorage.setItem('employees', JSON.stringify(employees));
    }
  }
  deleteEmployee(id: number) {
    const employees = this.getEmployees();
    const index = employees.findIndex((emp) => emp.id === id);
    if (index !== -1) {
      employees.splice(index, 1);
      localStorage.setItem('employees', JSON.stringify(employees));
    }
  }

  // Store logged-in user details
  setLoggedInUser(user: User): void {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  }

  // Fetch logged-in user details
  getLoggedInUser(): User {
    const user = localStorage.getItem('loggedInUser');
    return user ? JSON.parse(user) : null;
  }
}
