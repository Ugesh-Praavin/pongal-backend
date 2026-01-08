import { Body, Controller, Post } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { SubmitAnswersDto } from './ddto/submit-ansers.dto';
import { SheetsService } from '../sheets/sheets.service';

@Controller('quiz')
export class QuizController {
  constructor(
    private readonly service: QuizService,
    private readonly sheetsService: SheetsService,
  ) {}

  @Post('submit')
  submitAnswers(@Body() dto: SubmitAnswersDto) {
    // 1️⃣ calculate
    const scores = this.service.calculateScore(dto);
    const topDimensions = this.service.getTopDimensions(scores);

    // 2️⃣ generate results
    const recommendations = this.service.generateRecommendations(topDimensions);

    const persona = this.service.generatePersona(topDimensions);
    const languageLove = this.service.generateLanguageLove(topDimensions);

    const finance = this.service.generateFinanceAdvice(
      dto.student.financeLevel,
    );

    // 3️⃣ STORE everything (async, buffered)
    this.sheetsService.addStudent({
      name: dto.student.name,
      registerNo: dto.student.registerNo,
      department: dto.student.department,
      section: dto.student.section,
      year: dto.student.year,

      persona,
      recommendations: {
        ...recommendations,
        financeAdvice: finance,
      },
      languageLove,
    });

    // 4️⃣ respond immediately
    return {
      student: dto.student,
      persona,
      recommendations,
      finance,
      languageLove,
    };
  }
}
