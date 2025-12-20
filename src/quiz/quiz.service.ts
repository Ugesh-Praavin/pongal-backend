import { BadRequestException, Injectable } from '@nestjs/common';
import { SubmitAnswersDto } from './ddto/submit-ansers.dto';
import { initDimensionScore } from './utils/init-score.util';
import { QUESTIONS } from 'src/question/dta/questions.data';
import { Dimension } from 'src/common/enum/dimensions.enum';
import { DIMENSION_TO_CENTRES } from './constants/dimensions-mapping.constants';
import { DIMENSION_TO_CLUBS } from './constants/dimensions-club.constants';
import { getUniqueLimited } from './utils/recommendations.utils';
import { Persona, PERSONA_MAP } from './constants/persona.constaants';
import { FinanceLevel } from 'src/common/enum/finance.enum';
import { FINANCE_TIPS } from './constants/finance-tips.constants';

@Injectable()
export class QuizService {
  calculateScore(dto: SubmitAnswersDto) {
    const scores = initDimensionScore();
    for (const answer of dto.answers) {
      const question = QUESTIONS.find((q) => q.id === answer.questionId);
      if (!question) {
        throw new BadRequestException('Invalid question Id');
      }
      const option = question.options[answer.selectedOption];
      if (!option) {
        throw new BadRequestException('Invalid Option');
      }
      for (const dimension of option.mapsTo) {
        if (dimension === Dimension.WORKAHOLIC) {
          scores[Dimension.TECH] += 1;
          scores[Dimension.DATA] += 1;
          continue;
        }
        scores[dimension] += 1;
      }
    }
    return scores;
  }
  getTopDimensions(scores: Record<Dimension, number>, limit = 3) {
    return Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([dimension, score]) => ({
        dimension,
        score,
      }));
  }

  generateRecommendations(
    topDimensions: { dimension: string; score: number }[],
  ) {
    let centres: string[] = [];
    let clubs: string[] = [];

    for (const item of topDimensions) {
      const dim = item.dimension as any;

      centres.push(...(DIMENSION_TO_CENTRES[dim] || []));
      clubs.push(...(DIMENSION_TO_CLUBS[dim] || []));
    }

    return {
      centres: getUniqueLimited(centres, 3),
      clubs: getUniqueLimited(clubs, 4),
    };
  }
  generatePersona(
    topDimensions: { dimension: string; score: number }[],
  ): Persona {
    const primary = topDimensions[0].dimension as any;
    const secondary = topDimensions[1]?.dimension as any;

    const primaryPersona = PERSONA_MAP[primary];
    const secondaryPersona = secondary ? PERSONA_MAP[secondary] : null;

    if (!secondaryPersona) {
      return primaryPersona;
    }

    return {
      title: `${primaryPersona.title} with ${secondaryPersona.title} traits`,
      description: `${primaryPersona.description} You also show traits of ${secondaryPersona.description.toLowerCase()}`,
      strengths: Array.from(
        new Set([...primaryPersona.strengths, ...secondaryPersona.strengths]),
      ),
      learningStyle: primaryPersona.learningStyle,
    };
  }

  generateFinanceAdvice(financeLevel?: FinanceLevel) {
    if (!financeLevel) return null;
    return FINANCE_TIPS[financeLevel];
  }
}
