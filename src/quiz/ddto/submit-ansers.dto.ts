export class AnswerDto {
  questionId: number;
  selectedOption: 'A' | 'B' | 'C' | 'D';
}

export class SubmitAnswersDto {
  answers: AnswerDto[];
}
