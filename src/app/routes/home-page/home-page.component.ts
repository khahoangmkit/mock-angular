import {Component, OnInit} from '@angular/core';
import {QuestionDto} from "../../_module/question-dto";
import {SurveyService} from "../../_services/survey.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})

export class HomePageComponent implements OnInit {
  listQuestion: QuestionDto[] = [];
  index: number = 0;
  result:any = {};
  listAnswer: any = {};
  showListQuestion: boolean = false;
  total: number = 0;


  constructor(
    private surveyService: SurveyService
  ) { }

  ngOnInit(): void {
    this.surveyService.getSurvey().subscribe((response: any) => {
      this.listQuestion = response.sendQuestion;
    });
  }

  checkAnswer() {
    this.surveyService.submitQuestion(this.listAnswer).subscribe((response : any) => {
      let temp;
      for (const el of response) {
        temp = el.id;
        this.result[temp] = el.result;
        if(el.result) this.total++;
      }
    });
  }

  nextQuestion(next: boolean) {
    if(this.index === this.listQuestion.length - 1) {
      this.checkAnswer();
      this.showListQuestion = true;
      console.log(this.listAnswer);
    }

    if( next && this.index < this.listQuestion.length - 1) {
      this.index++;
    } else if (!next && this.index > 0) {
      this.index--;
    }
  }

  saveAnswer(answer: any) {
    this.listAnswer[answer.questionId] = answer.answer;
  }

  getCheck(field : any){
    try {
      if(field !== null) {
        return this.listAnswer[field];
      }

      const questionId:any = this.listQuestion[this.index]._id;
      return this.listAnswer[questionId];
    } catch (e) {
      return null;
    }
  }

  checkCorrect(questionId: any) {
    return this.result[questionId];
  }

}
