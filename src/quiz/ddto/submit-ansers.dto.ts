import { StudentProfileDto } from 'src/common/dto/student-profile.dto';

export class AnswerDto {
  questionId: number;
  selectedOption: 'A' | 'B' | 'C' | 'D';
}

export class SubmitAnswersDto {
  student: StudentProfileDto;
  answers: AnswerDto[];
}
