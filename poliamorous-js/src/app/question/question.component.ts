import { Component, Input, OnInit } from '@angular/core';

import { Question } from './question';
import { QuestionService } from './question.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent {
  constructor(
    private questionService: QuestionService
  ){}

  // The input decorator declares an input property
  // @Input() question: question;

}
