import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionDto} from "../../../_module/question-dto";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: QuestionDto;
  @Output() chooseAnswer = new EventEmitter<string>();

  constructor() {
    this.question = {
      question: "What time is it???",
      answer1: "I don't know",
      answer2: "Right !",
      answer3: "No, It isn't",
      answer4: "12:30",
      correctanswer: "12:30",
    }
  }

  choose(value: string) {
    this.chooseAnswer.emit(value);
  }

  ngOnInit(): void {
  }

}
