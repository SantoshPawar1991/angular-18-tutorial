import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {
  isShowAndHideDiv: boolean = true;
  isToggleDiv: boolean = true;
  num1: string = '';
  num2: string = '';
  isActive: boolean = false;


  citiesArray: string[] = ['pune', 'mumbai', 'latur', 'ausa'];




  showDiv() {
    this.isShowAndHideDiv = true;
  }

  hideDiv() {
    this.isShowAndHideDiv = false
  }

  showAndHideDiv() {
    this.isToggleDiv = !this.isToggleDiv;
  }



}
