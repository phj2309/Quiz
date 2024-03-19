import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {fetchQuiz, addIncorrectAnswer} from '@slices/quizSlice';
// import Radio from '@components/Radio';
import {useAppDispatch, useAppSelector} from '@shared/useRedux';
import {Question} from '@type/slice/quizType';

import * as STC from './QuizScreen.style';

const QuizScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState<number>(0);
  const [quizStartTime, setQuizStartTime] = useState<Date>(new Date());
  const [correctMessage, setCorrectMessage] = useState<string>('');

  const quiz = useAppSelector(({quiz}) => quiz);

  useEffect(() => {
    if (quiz.question.status === 'SUCCESS') {
      // 데이터가 유효한지 검사하는 로직 추가
      if (!quiz.question.results || quiz.question.results.length === 0) {
        dispatch(fetchQuiz()); // 데이터를 다시 불러오는 액션 호출
        return;
      }

      const shuffledQuestions = quiz.question.results.map(q => ({
        ...q,
        options: [q.correct_answer, ...q.incorrect_answers].sort(
          () => Math.random() - 0.5,
        ),
      })); // 옵션 섞기

      setQuestions(shuffledQuestions);
      setIsLoading(false);
      setQuizStartTime(new Date()); // 퀴즈 시작 시간 설정
    } else if (quiz.question.status === 'FAIL') {
      dispatch(fetchQuiz());
      setIsLoading(true);
    } else {
      setIsLoading(true);
    }
  }, [quiz.question]);

  const handleAnswer = (selectedOption: string) => {
    if (selectedAnswer !== null) return; // 이미 답을 선택했다면 추가 동작 방지

    const questionData = questions[currentQuestionIndex];
    const isCorrect =
      selectedOption === questions[currentQuestionIndex].correct_answer;
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
      setCorrectMessage('정답입니다.');
    } else {
      setIncorrectAnswers(prev => prev + 1);
      setCorrectMessage('오답입니다.');

      dispatch(
        addIncorrectAnswer({
          question: questionData.question,
          selectedAnswer: selectedOption,
          correctAnswer: questionData.correct_answer,
          answers: questions[currentQuestionIndex].options ?? [
            questionData.incorrect_answers + questionData.correct_answer,
          ],
        }),
      );
    }

    setSelectedAnswer(selectedOption);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null); // 다음 문항으로 넘어가면 선택한 답을 초기화
      setCorrectMessage('');
    } else {
      navigation.reset({
        index: 0,
        routes: [
          {name: 'Main'},
          {
            name: 'Result',
            params: {
              timeTaken:
                (
                  (new Date().getTime() - quizStartTime.getTime()) /
                  1000
                ).toFixed(1) + '초',
              correctAnswers,
              incorrectAnswers,
            },
          },
        ],
      });
    }
  };

  if (isLoading) {
    return (
      <STC.SafeArea>
        <STC.BasicText>~퀴즈 로딩 중~</STC.BasicText>
      </STC.SafeArea>
    );
  }

  return (
    <STC.SafeArea>
      <STC.Container>
        <STC.QuestionText>
          Q{currentQuestionIndex + 1}.{' '}
          {questions[currentQuestionIndex].question}
        </STC.QuestionText>
        {questions[currentQuestionIndex]?.options?.map((option, index) => (
          <STC.AnswerContainer key={index} onPress={() => handleAnswer(option)}>
            {/* <Radio
              id={index}
              checked={option === selectedAnswer}
              handleRadio={() => {
                //console.log(item);
              }}
            /> */}
            <STC.AnswerText
              correct={
                option === questions[currentQuestionIndex].correct_answer
              }
              selected={option === selectedAnswer}
              selectedAnswer={selectedAnswer}>
              {option}
            </STC.AnswerText>
          </STC.AnswerContainer>
        )) ?? (
          <STC.NextButton onPress={goToNextQuestion}>
            <STC.NextText>다음 문항</STC.NextText>
          </STC.NextButton>
        )}

        {correctMessage !== '' && (
          <STC.TextWrapper>
            <STC.BasicText active={correctMessage}>
              {correctMessage}
            </STC.BasicText>
          </STC.TextWrapper>
        )}
        {selectedAnswer !== null && (
          <STC.NextButton onPress={goToNextQuestion}>
            <STC.NextText>다음 문항</STC.NextText>
          </STC.NextButton>
        )}
      </STC.Container>
    </STC.SafeArea>
  );
};

export default QuizScreen;
