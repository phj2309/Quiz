import {QuizApiResponse} from '@type/slice/quizType';

export const fetchQuiz = async (): Promise<QuizApiResponse> => {
  const response = await fetch(
    'https://opentdb.com/api.php?amount=2&type=multiple',
  );
  const data: QuizApiResponse = await response.json();
  return data;
};

// export const fetchQuiz = () => {
//   return fetch('https://opentdb.com/api.php?amount=2&type=multiple')
//     .then(res => res.json())
//     .then((res: QuizApiResponse) => res)
//     .catch(e => {
//       console.error(e);
//     });
// };
