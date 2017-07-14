import { Question } from './question';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'Who did you vote for in the 2016 Presidential election?',
    options: [
      'Clinton',
      'Trump'
    ],
    choice: null
  },
  {
    id: 2,
    text: 'What party do you identify with?',
    options: [
      'Democratic',
      'Republican'
    ],
    choice: null
  },
  {
    id: 3,
    text: 'In general, do you believe a lower tax burden leads to greater economic growth?',
    options: [
      'Yes',
      'No'
    ],
    choice: null
  },
  {
    id: 4,
    text: 'Do you believe that health care is a universal right?',
    options: [
      'Yes',
      'No'
    ],
    choice: null
  }
];
