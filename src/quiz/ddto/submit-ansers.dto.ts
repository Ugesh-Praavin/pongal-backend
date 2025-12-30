import { IsIn, IsNumber } from 'class-validator';

export class AnswerDto {
  @IsNumber()
  questionId: number;

  @IsIn(['A', 'B', 'C', 'D'])
  selectedOption: 'A' | 'B' | 'C' | 'D';
}

import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { StudentProfileDto } from 'src/common/dto/student-profile.dto';

export class SubmitAnswersDto {
  @ValidateNested()
  @Type(() => StudentProfileDto)
  student: StudentProfileDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AnswerDto)
  answers: AnswerDto[];
}
