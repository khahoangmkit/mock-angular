import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(
    private router: Router
  ) {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      rePassword: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

  login() {
    this.router.navigate(['auth/login'])
  }
}
