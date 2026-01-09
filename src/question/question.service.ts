import { Injectable } from '@nestjs/common';
import { QUESTIONS } from './dta/questions.data';
import { Question } from './interface/question.interface';

@Injectable()
export class QuestionService {
  getRandomQuestions(count = 5): Question[] {
    const shuffled = [...QUESTIONS].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  } // hello
}
