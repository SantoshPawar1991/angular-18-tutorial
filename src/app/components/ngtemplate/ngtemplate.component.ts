import { CommonModule } from '@angular/common';
import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngtemplate.component.html',
  styleUrl: './ngtemplate.component.css',
})
export class NgtemplateComponent {
  isUserLoggedIn: boolean = false;
  loggedUserName: string = 'Santosh';

  @ViewChild('dyanamicTemp') dynaTemp: TemplateRef<any> | undefined;
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) dynaCont:
    | ViewContainerRef
    | undefined;

  onShow() {
    this.isUserLoggedIn = true;
  }
  onHide() {
    this.isUserLoggedIn = false;
  }

  loadTemplate() {
    if (this.dynaTemp) {
      this.dynaCont?.createEmbeddedView(this.dynaTemp);
    }
  }
}
