import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { RegisterEmployeeComponent } from './employee/register-employee/register-employee.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterEmployeeComponent
  },
  {
    path: 'employees',
    component: ListEmployeeComponent
  },
  {
    path: 'register',
    component: RegisterEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
