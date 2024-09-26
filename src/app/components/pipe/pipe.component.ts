import {
  AsyncPipe,
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    JsonPipe,
    AsyncPipe,
    NaPipe,
  ],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css',
})
export class PipeComponent {
  courseName: string = 'Angular tutorial';

  generalStatement: string = 'this is general site';

  currentDate: Date = new Date();

  student: any = {
    name: 'santosh',
    city: 'pune',
    designation: 'technical lead',
    state: 'MH',
  };
}
