// add-student.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class AddStudentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  registerNo: string;

  @IsString()
  department: string;

  @IsString()
  section: string;

  @IsString()
  year: string;
}
