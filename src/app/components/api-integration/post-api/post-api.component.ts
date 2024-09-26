import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from '../../resuseable-comps/alert/alert.component';
import { MyButtonComponent } from '../../resuseable-comps/my-button/my-button.component';
import { Department, IDepartmentList } from '../../model/class/Customer';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, CommonModule, AlertComponent, MyButtonComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css',
})
export class PostApiComponent implements OnInit {
  departmentObj: Department = new Department();

  deptArr: IDepartmentList[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getDepartmentList();
  }
  onSave() {
    this.http
      .post(
        'https://projectapi.gerasim.in/api/Complaint/AddNewDepartment',
        this.departmentObj
      )
      .subscribe((res: any) => {
        this.getDepartmentList();
        if (res.result) {
          alert('New department added successfully');
        } else {
          alert('Department is already exists');
        }
      });
  }

  onDelete(id: any) {
    const isDelete = confirm('Are you sure to delete the record?');
    if (isDelete) {
      this.http
        .delete(
          'https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId=' +
            id
        )
        .subscribe((res: any) => {
          debugger;
          if (res.result) {
            alert('Department Deleted successfully');
          } else {
            alert(res.message);
          }
        });
    }
  }

  getDepartmentList() {
    this.http
      .get('https://projectapi.gerasim.in/api/Complaint/GetParentDepartment')
      .subscribe((response: any) => {
        this.deptArr = response.data;
        //console.log(this.deptArr);
      });
  }

  onUpdateDepartment() {
    // debugger;
    this.http
      .post(
        'https://projectapi.gerasim.in/api/Complaint/UpdateDepartment',
        this.departmentObj
      )
      .subscribe((res: any) => {
        this.getDepartmentList();
        if (res.result) {
          alert('department updated successfully');
        } else {
          alert(res.message);
        }
      });
  }

  onEdit(data: any) {
    // debugger;
    this.departmentObj = new Department();
    this.departmentObj = data;
  }
}
