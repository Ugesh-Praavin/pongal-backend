import { Body, Controller, Post } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { SubmitAnswersDto } from './ddto/submit-ansers.dto';

@Controller('quiz')
export class QuizController {
  constructor(private readonly service: QuizService) {}

  @Post('submit')
  submitAnswers(@Body() dto: SubmitAnswersDto) {
    const scores = this.service.calculateScore(dto);
    const topDimensions = this.service.getTopDimensions(scores);
    const recommendations = this.service.generateRecommendations(topDimensions);
    const persona = this.service.generatePersona(topDimensions);

    return {
      persona,
      topDimensions,
      recommendations,
    };
  }
}
