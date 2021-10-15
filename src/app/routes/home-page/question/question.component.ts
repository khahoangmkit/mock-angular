import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionDto} from "../../../_module/question-dto";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question!: QuestionDto;
  @Output() chooseAnswer = new EventEmitter<string>();
  @Input() checked!: string;
  @Input() indexQuestion!: number;
  @Input() totalQuestion!: number;
  @Input() isCorrect!: boolean;
  answer: any

  constructor() {
    this.answer = []
  }

  ngOnInit(): void {
    console.log(this.isCorrect, this.question.question)
  }

  select(value: any) {
    this.answer = value;

    const temp: any = {
      questionId: this.question._id,
      answer: value
    }
    this.chooseAnswer.emit(temp);
  }

  getClass(value: any) {
    if( value == this.checked) {
      if(this.isCorrect) return "option correct";
      if(this.isCorrect === false) return "option incorrect";
      return "option active";
    }
    if (this.answer === value) {
      if(this.isCorrect) return "option correct";
      if(this.isCorrect === false) return "option incorrect";

      return "option active";
    }

    return "option";
  }

}
