import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class UserModule { }
