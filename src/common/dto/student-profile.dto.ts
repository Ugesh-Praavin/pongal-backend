import { IsEnum, IsOptional, IsString } from 'class-validator';
import { FinanceLevel } from 'src/common/enum/finance.enum';

export class StudentProfileDto {
  @IsString()
  name: string;

  @IsString()
  registerNo: string;

  @IsString()
  department: string;

  @IsString()
  section: string;

  @IsString()
  year: string;

  @IsOptional()
  @IsEnum(FinanceLevel)
  financeLevel?: FinanceLevel;
}
