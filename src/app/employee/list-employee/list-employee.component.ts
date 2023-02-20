import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent {
  employees: Employee[] = [];

  constructor(
    public authService: AuthService
  ) {}

  ngOnInit(){
    this.getEmployees();
  }

  getEmployees(){
    this.authService.getAllEmployees().subscribe(result => {
      this.employees = result;
    })
  }

  deleteEmployee(){
    
  }
}
