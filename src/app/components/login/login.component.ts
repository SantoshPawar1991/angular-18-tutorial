import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userCredencials = {
    userName: '',
    password: '',
  };

  router = inject(Router);
  http = inject(HttpClient);

  login() {
    debugger;
    // if (
    //   this.userCredencials.username == 'admin' &&
    //   this.userCredencials.password == '123'
    // ) {
    //   alert('logged in Successfully');
    //   localStorage.setItem('loginuser', this.userCredencials.username);
    //   this.router.navigateByUrl('data-binding');
    // } else {
    //   alert('Wrong username and password');
    // }

    this.http
      .post(
        'https://projectapi.gerasim.in/api/OnlineLearning/login',
        this.userCredencials
      )
      .subscribe((res: any) => {
        if (true) {
          alert('logged in Successfully');
          localStorage.setItem(
            'loginuser',
            JSON.stringify(this.userCredencials)
          );
          this.router.navigateByUrl('data-binding');
        } else {
          alert(res.message);
        }
      });
  }
}
