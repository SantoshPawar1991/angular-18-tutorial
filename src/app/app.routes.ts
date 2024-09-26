import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { IfstateComponent } from './components/control flow/ifstate/ifstate.component';
import { ForstateComponent } from './components/control flow/forstate/forstate.component';
import { ElseifstateComponent } from './components/control flow/elseifstate/elseifstate.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateComponent } from './components/froms/template/template.component';
import { ReactiveComponent } from './components/froms/reactive/reactive.component';
import { GetApiComponent } from './components/api-integration/get-api/get-api.component';
import { PostApiComponent } from './components/api-integration/post-api/post-api.component';
import { NgtemplateComponent } from './components/ngtemplate/ngtemplate.component';
import { NgcontainerComponent } from './components/ngcontainer/ngcontainer.component';
import { ViewchildComponent } from './components/viewchild/viewchild.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './components/services/auth.guard';
import { SignalsComponent } from './components/signals/signals.component';

export const routes: Routes = [
  // default routes
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'data-binding',
        pathMatch: 'full',
        component: DataBindingComponent,
      },
      {
        path: 'emp-list',
        component: EmployeeListComponent,
        canActivate: [authGuard],
      },
      {
        path: 'struc-dir',
        component: StructuralDirectiveComponent,
        canActivate: [authGuard],
      },
      {
        path: 'attri-dir',
        component: AttributeDirectiveComponent,
        canActivate: [authGuard],
      },
      {
        path: 'if-statement',
        component: IfstateComponent,
        canActivate: [authGuard],
      },
      {
        path: 'for-statement',
        component: ForstateComponent,
      },
      {
        path: 'else-if-statement',
        component: ElseifstateComponent,
      },
      {
        path: 'pipe',
        component: PipeComponent,
      },
      {
        path: 'template',
        component: TemplateComponent,
      },
      {
        path: 'reactive',
        component: ReactiveComponent,
      },
      {
        path: 'get-api',
        component: GetApiComponent,
      },
      {
        path: 'post-api',
        component: PostApiComponent,
      },
      {
        path: 'ng-template',
        component: NgtemplateComponent,
      },
      { path: 'ng-container', component: NgcontainerComponent },
      {
        path: 'viewchild',
        component: ViewchildComponent,
      },
      {
        path: 'signals',
        component: SignalsComponent,
      },
    ],
  },
];
