import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

  ngClassDiv: string = 'bg-primary'
  div2ToggleNgClass: boolean = false;


  customerStyle: any = {
    'color': 'white',
    'background-color': 'red',
    'width': '200px',
    'height': '200px',
    'border-radius': '50%'
  }


  addRedColor() {
    this.ngClassDiv = 'bg-danger';
  }
  addBlueColor() {
    this.ngClassDiv = 'bg-primary';
  }

  addRedAndAmberToggleOnSignleButton() {
    this.div2ToggleNgClass = !this.div2ToggleNgClass;
  }
}
