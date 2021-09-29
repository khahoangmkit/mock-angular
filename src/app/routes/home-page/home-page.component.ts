import {Component, OnInit} from '@angular/core';
import {QuestionDto} from "../../_module/question-dto";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})


export class HomePageComponent implements OnInit {
  questions: QuestionDto[] = [];
  dem: number = 0;

  constructor() {
  }

  ngOnInit(): void {

  }

  saveAnswer(answer: string) {
    console.log(answer)
  }

}
