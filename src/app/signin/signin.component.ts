import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../util/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  username = '';
  password = '';
  isInvalidCredentials = false;


  constructor(private employee: EmployeeService, private rout: Router) {}

  ngOnInit(): void {}

  onLogin() {
    
      let res = this.employee.login(this.username, this.password);
      if (res === 200) {
        this.isInvalidCredentials = false; // Reset 
        this.rout.navigate(['dashboard']);
      } else if (res === 403) {
        this.isInvalidCredentials = true; // Set 
      }
    
  }
}
