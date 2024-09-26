import { Component } from '@angular/core';

@Component({
  selector: 'app-forstate',
  standalone: true,
  imports: [],
  templateUrl: './forstate.component.html',
  styleUrl: './forstate.component.css'
})
export class ForstateComponent {

  studentList: any[] = [

    { studentId: 11, marks: '56', gender: 'male', name: 'Ganesh', isActive: true },
    { studentId: 55, marks: '46', gender: 'female', name: 'Kiran', isActive: false },
    { studentId: 22, marks: '89', gender: 'male', name: 'Gaffar', isActive: false },
    { studentId: 33, marks: '55', gender: 'male', name: 'Santosh', isActive: true },
    { studentId: 55, marks: '67', gender: 'female', name: 'Kiran', isActive: false },
    { studentId: 44, marks: '76', gender: 'male', name: 'Mahesh', isActive: true },
    { studentId: 55, marks: '43', gender: 'male', name: 'Kiran', isActive: false },

  ];

}
