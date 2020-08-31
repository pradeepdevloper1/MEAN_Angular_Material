import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from '../../shared/employee';
import { map } from 'rxjs/operators';
import { MatTableDataSource} from '@angular/material/table';
import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  Employeelist : Employee[] ;
  dataSource=new EmpDataSource(this.empservice);

  
  displayedColumns: string[] = ['empid','fullName', 'email','mobile','city','gender','department','hireDate','isPermanent'];
  constructor(private empservice:EmployeeService) { }

  ngOnInit(): void {  console.log(this.dataSource);}
} 

export class EmpDataSource extends DataSource<any>{
  constructor(private empService:EmployeeService){
    super();
  }
  connect():Observable<Employee[]>{
    return this.empService.getEmployees();
  }
  disconnect(){
  }
}
