import {QuizApiResponse} from '@type/slice/quizType';

export const fetchQuiz = async (): Promise<QuizApiResponse> => {
  const response = await fetch(
    'https://opentdb.com/api.php?amount=2&type=multiple',
  );
  const data: QuizApiResponse = await response.json();
  return data;
};
