import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ContainerComponent } from './container/container.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [LoginComponent, ResetPasswordComponent, ForgetPasswordComponent, ContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'login', component: ContainerComponent },
      { path: 'forget-password', component: ForgetPasswordComponent },
      { path: 'reset-passsword', component: ResetPasswordComponent }
    ]),
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthenticationModule { }
