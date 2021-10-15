import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {AppConstant} from "../_constant/app-constant";

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(
    private baseService: BaseService
  ) {}

  getSurvey() {
    return this.baseService.get(`${AppConstant.ApiUrl}/questions`);
  }

  submitQuestion(data: any) {
    return this.baseService.post(`${AppConstant.ApiUrl}/questions/submit`, data);
  }
}
