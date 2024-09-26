import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertComponent } from '../../resuseable-comps/alert/alert.component';
import { Constant } from '../../../Constant/Constant';
import { Customer } from '../../model/class/Customer';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css',
})
export class GetApiComponent {
  usersList: Customer[] = [];
  toDos: any[] = [];

  constructor(private http: HttpClient) {
    this.getAllUsers();
    this.getAllCustmer();
  }

  getAllUsers() {
    debugger;
    this.http.get(Constant.API_URL).subscribe((result: any) => {
      debugger;
      this.usersList = result;
    });
  }

  getAllCustmer() {
    debugger;
    this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((response: any) => {
        debugger;
        this.toDos = response;
      });
  }
}
