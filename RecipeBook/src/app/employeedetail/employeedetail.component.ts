import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrl: './employeedetail.component.css'
})
export class EmployeedetailComponent {
  public employees=[]
  constructor(private employeeService:EmployeeService){}
    ngOnInit(){
      this.employeeService.getEmployees()
      .subscribe(data=>this.employees=data)
    }
}
