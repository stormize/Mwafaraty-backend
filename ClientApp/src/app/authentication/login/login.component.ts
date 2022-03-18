import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginError } from '@app/core/models/Error';
import { LoginRequestVm } from '@app/core/models/LoginRequestVm';
import { LoginResponseVm } from '@app/core/models/LoginResponseVm';
import { AuthenticationService } from '../services/authentication-service.service';

@Component({
  selector: 'sb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // @Output() sendLoginForm = new EventEmitter<void>();
  loginForm: FormGroup;
  submitted = false;
  returnUrl = '';
  error:LoginError;
  loginError = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthenticationService
    ) {
      this.loginForm = this.fb.group({
        phoneNumber: ['', Validators.required],
        password: ['', Validators.required]
      });
      this.error = { errorDesc : '' , errorTitle : '' };
     }

  ngOnInit() {
    this.authService.logout();
  }

  get phoneNumber() { return this.loginForm.get('phoneNumber'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    this.submitted = true;
    this.authService.login(this.phoneNumber?.value, this.password?.value).subscribe((data) => {
       if (this.authService.isLoggedIn()) {
          const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '';
          this.router.navigate([redirect]);
        } else {
          this.loginError = 'Username or password is incorrect.';
        }
      },
      error => this.error = error
    );
  }
}
