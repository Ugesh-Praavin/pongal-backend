import { FinanceLevel } from '../enum/finance.enum';

export class StudentProfileDto {
  name: string;
  registerNo: string;
  department: string;
  section: string;
  year: number;

  financeLevel?: FinanceLevel;
}
