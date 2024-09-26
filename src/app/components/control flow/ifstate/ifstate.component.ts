import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ifstate',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ifstate.component.html',
  styleUrl: './ifstate.component.css'
})
export class IfstateComponent {


  div1Visible: boolean = true;
  isWarningDiv2: boolean = false;
  num1 = '';
  num2 = '';
  selectedStatus: string = '';

  showDiv() {
    this.div1Visible = true;
  }

  hideDiv() {
    this.div1Visible = false;
  }

  showAndHideDiv() {
    this.isWarningDiv2 = !this.isWarningDiv2;
  }
}
