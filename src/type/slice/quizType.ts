import {IInitState} from '@type/slice/responseType';

export interface IQuizInitState {
  question: QuizApiResponse;
  incorrectAnswers: IncorrectAnswer[];
}

export interface QuizApiResponse extends IInitState {
  results: Question[];
}

export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  options?: string[];
}

export interface IncorrectAnswer {
  question: string;
  selectedAnswer: string;
  correctAnswer: string;
  answers: string[];
  options?: string[];
}
