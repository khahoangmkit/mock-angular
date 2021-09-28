import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {AppConstant} from "../_constant/app-constant";
import {LoginRequestDto} from "../_module/login-request-dto";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private baseService: BaseService,
    private cookieService: CookieService
  ) { }

  login(infoLogin: LoginRequestDto) {
    return this.baseService.post(`${AppConstant.ApiUrl}/auth/login`, infoLogin)
  }

  logout() {
    this.cookieService.deleteAll();
  }
}
