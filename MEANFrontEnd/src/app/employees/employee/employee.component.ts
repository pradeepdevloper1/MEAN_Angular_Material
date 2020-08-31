import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService,private toastr:ToastrService) { }
  departments = [
    { id: 3, value: 'Dep 1' },
    { id: 2, value: 'Dep 2' },
    { id: 3, value: 'Dep 3' }];

  
  ngOnInit(): void {
  }
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
// onSubmit(){
//   console.log(this.service.form.value);
// }
onSubmit(form) {
  console.log(this.service.form.value);
  
  if (this.service.form.value._id == null)
    this.insertRecord(this.service.form);
  else
    this.updateRecord(this.service.form);
}
insertRecord(form) {
  this.service.postEmployee(form.value).subscribe(res => {
    this.toastr.success('Inserted successfully', `${this.service.form.value['fullName']}  successfully  Registered`);
    this.service.initializeFormGroup();
    this.service.refreshList();
  });
}

updateRecord(form) {
  this.service.putEmployee(form.value).subscribe(res => {
    this.toastr.info('Updated successfully', 'EMP. Register');
    this.service.initializeFormGroup();
    this.service.refreshList();
  });

}
}
