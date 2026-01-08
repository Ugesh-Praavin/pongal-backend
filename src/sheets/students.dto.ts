export class AddStudentDto {
  name: string;
  registerNo: string;
  department: string;
  section: string;
  year: string;

  persona: {
    title: string;
    description: string;
    strengths: string[];
    learningStyle: string;
  };

  recommendations: {
    centres: string[];
    clubs: string[];
    financeAdvice?: string[];
  };

  languageLove: {
    language: string;
    tagline: string;
    reason: string;
  };
}
