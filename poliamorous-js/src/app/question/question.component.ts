import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Question } from './question';
import { QuestionService } from './question.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {
  // Constructor
  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ){}

  // Attributes
  numQuestions = this.questionService.countQuestions();
  buttonChoice = "first";

  // The input decorator declares an input property
  @Input() question: Question;


  // Methods
  ngOnInit(): void{
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.questionService.getQuestion(+params.get('id')))
        .subscribe(question => this.question = question);
  }

  previousQuestion(): void {
    var lastId = this.question.id - 1;
    // Don't navigate back too far
    if(lastId < 1){
      lastId = 1;
    }
    this.router.navigate(['/question', lastId]);
  }

  nextQuestion(): void {
    var nextId = this.question.id + 1;
    // Don't navigate forward too far
    if(nextId > this.numQuestions){
      nextId = this.numQuestions;
    }
    this.router.navigate(['/question', nextId]);
  }


  
}
