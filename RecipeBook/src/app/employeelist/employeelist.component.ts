import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent implements OnInit {
public employees=[]
constructor(private employeeService:EmployeeService){}
  ngOnInit(){
   this.employeeService.getEmployees()
    .subscribe(data=>this.employees=data)
  }
  
}
