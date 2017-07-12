import { Injectable } from '@angular/core';

import { Question } from './question';
import { QUESTIONS } from './mock-questions';

// The injectable decorator tells type script to
//  emit meta data about the service
@Injectable()
export class QuestionService {
  getQuestions(): Promise<Question[]>{
    // Returns the mock question in the mock-quesions.ts file
    // The promise will prevent the UI from loading until
    //  data has been returned 
    return Promise.resolve(QUESTIONS);
  }

  getQuestion(id: number): Promise<Question>{
    // Returns an individual question, given an id
    return this.getQuestions()
      .then(questions => questions
      .find(question => question.id === id));
  }

}

