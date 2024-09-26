import { Component, inject } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  loggedUserData: any;

  constructor() {
    debugger;
    const loggedData = localStorage.getItem('loginuser');
    debugger;
    if (loggedData != null) {
      this.loggedUserData = JSON.parse(loggedData);
    }
  }

  router = inject(Router);

  logout() {
    localStorage.removeItem('loginuser');
    this.router.navigateByUrl('login');
  }
}
