import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../../_services/auth.service";
import {CookieService} from "ngx-cookie-service";
import {AppConstant} from "../../../_constant/app-constant";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  username: FormControl;
  password: FormControl;
  isError: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private cookieService: CookieService
  ) {
    this.username = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);
    this.formLogin = fb.group({
      username: this.username,
      password: this.password
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if( this.formLogin.controls.username.errors || this.formLogin.controls.password.errors) {
      this.toastr.error('Username or password invalid');
      console.log('Username or password invalid');
    } else {
      const data = {
        username: this.formLogin.controls.username.value,
        password: this.formLogin.controls.password.value
      }
      this.authService.login(data).subscribe((response : any) => {
        this.cookieService.set(AppConstant.ACCESS_TOKEN, response.tokens.access.token);
        this.router.navigate(['/home']);
      })
    }
  }

  register() {
    this.router.navigate(['auth/register'])
  }
}
