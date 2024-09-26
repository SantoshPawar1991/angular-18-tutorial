import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
})
export class SignalsComponent {
  firstName = signal('Santosh');
  lastName = signal('Pawar');

  fullname = computed(() => this.firstName() + ' ' + this.lastName());

  courseName = signal('Angular - 18');

  technology: string = '. Net';

  cityList = signal(['Pune', 'Mumbai']);

  constructor() {
    const cName = this.courseName();
    setTimeout(() => {
      this.courseName.set('Java');
      this.technology = 'HTML';
    }, 5000);
  }

  changeName() {
    this.courseName.set('React- JS');
  }

  changeFirstName() {
    this.firstName.set('Sachin');
  }

  changeLastName() {
    this.lastName.set('Tendulkar');
  }

  addCity() {
    this.cityList.set([...this.cityList(), 'Nagpur']);
  }
}
