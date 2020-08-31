import { Injectable } from '@angular/core';
import {Department} from './department';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
departmentList:any;
  array=[];
  readonly rootURL ="http://localhost:8084/api";
  constructor(private http:HttpClient) { 
    this.departmentList=this.getEmployees();
    this.departmentList.snapshot().subscribe(
      list=>{
        this.array=list.map(item=>{
          return{
            $key:item.key,
            ...item.payload.val()
          };
        });
      });
  }
  getEmployees(){
    return this.http.get(this.rootURL+'/Departments');
  }
}
