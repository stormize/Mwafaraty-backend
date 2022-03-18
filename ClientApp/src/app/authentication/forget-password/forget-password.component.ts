import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgetPasswordVm } from '@app/core/models/ForgetPasswordVm';
import { AuthenticationService } from '../services/authentication-service.service';

@Component({
  selector: 'sb-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
/**
 *
 */
constructor() {


}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // public forgotPasswordForm: FormGroup
  // public successMessage: string = "";
  // public errorMessage: string = "";
  // public showSuccess: boolean = false;
  // public showError: boolean = false;
  // constructor(private _authService: AuthenticationService) { }
  // ngOnInit(): void {
  //   this.forgotPasswordForm = new FormGroup({
  //     email: new FormControl("", [Validators.required])
  //   })
  // }
  // public validateControl = (controlName: string) => {
  //   return this.forgotPasswordForm.controls[controlName].invalid && this.forgotPasswordForm.controls[controlName].touched
  // }
  // public hasError = (controlName: string, errorName: string) => {
  //   return this.forgotPasswordForm.controls[controlName].hasError(errorName)
  // }
  // public forgotPassword = (forgotPasswordFormValue : ForgetPasswordVm) => {
  //   this.showError = this.showSuccess = false;
  //   const forgotPass = { ...forgotPasswordFormValue };
  //   const forgotPassDto: ForgetPasswordVm = {
  //     email: forgotPass.email,
  //     clientURI: 'http://localhost:4200/authentication/resetpassword'
  //   }
  //   this._authService.forgotPassword('api/accounts/forgotpassword', forgotPassDto)
  //   .subscribe(_ => {
  //     this.showSuccess = true;
  //     this.successMessage = 'The link has been sent, please check your email to reset your password.'
  //   },
  //   err => {
  //     this.showError = true;
  //     this.errorMessage = err;
  //   })
  // }
}
