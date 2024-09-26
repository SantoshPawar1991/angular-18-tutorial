import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName: string = 'Angular-18';
  inputType = 'checkbox';
  date = new Date;
  isIndian: boolean = true;
  myClassName: string = 'bg-primary';
  stateName: string = 'Goa';

  firstName = signal('Santosh Pawar');


  constructor() {

  }

  changeCourseName() {
    this.courseName = 'React Js';
    this.firstName.set('Ganesh Pawar');
  }

  showAlert(message: string) {
    alert(message);
  }

}
