import { Dimension } from 'src/common/enum/dimensions.enum';

export interface QuestionOption {
  text: string;
  mapsTo: Dimension[];
}

export interface Question {
  id: number;
  text: string;
  options: {
    A: QuestionOption;
    B: QuestionOption;
    C: QuestionOption;
    D: QuestionOption;
  };
}
