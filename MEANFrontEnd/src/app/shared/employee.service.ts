import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Employee } from './employee';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData  : Employee;
  list : Employee[];
  readonly rootURL ="http://localhost:9091/api";
  constructor(private http : HttpClient) { }

  refreshList(){
    this.http.get(this.rootURL+'/Employees')
    .toPromise().then(res => this.list = res as Employee[]);
  }
  getEmployees(){
    return this.http.get<Employee[]>(this.rootURL+'/Employees');
  }
  postEmployee(formData : Employee){
    return this.http.post(this.rootURL+'/Employees',formData);
     
   }
   putEmployee(formData : Employee){
    return this.http.put(this.rootURL+'/Employees/'+formData._id,formData);
     
   }

   deleteEmployee(id : number){
    return this.http.delete(this.rootURL+'/Employees/'+id);
   }
  form: FormGroup = new FormGroup({
    empid: new FormControl(Math.floor(100000 + Math.random() * 900000)),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(0),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(false)
  });
  initializeFormGroup() {
    this.form.setValue({
     empid: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      department: 0,
      hireDate: '',
      isPermanent: false
    });
  }



}
