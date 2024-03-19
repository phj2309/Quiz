import React, {useState, useLayoutEffect} from 'react';
import {useAppSelector} from '@shared/useRedux';
import {IncorrectAnswer} from '@type/slice/quizType';

import * as STC from './IncorrectAnswersScreen.style';

const IncorrectAnswersScreen = () => {
  const [questions, setQuestions] = useState<IncorrectAnswer[]>([]);

  const incorrectAnswers = useAppSelector(({quiz}) => quiz.incorrectAnswers);

  useLayoutEffect(() => {
    if (incorrectAnswers !== null) {
      setQuestions(incorrectAnswers);
    }
  }, [incorrectAnswers]);

  return (
    <STC.SafeArea>
      <STC.ScrollView>
        <STC.Container>
          {questions.map((question, index) => (
            <STC.QuizContainer key={index}>
              <STC.QuestionText>{question.question}</STC.QuestionText>
              <STC.AnswerContainer>
                {question.answers.map((answer, answerIndex) => (
                  <STC.AnswerText
                    key={answerIndex}
                    correct={answer === question.correctAnswer}
                    selected={answer === question.selectedAnswer}>
                    {answer}
                  </STC.AnswerText>
                ))}
              </STC.AnswerContainer>
            </STC.QuizContainer>
          ))}
        </STC.Container>
      </STC.ScrollView>
    </STC.SafeArea>
  );
};

export default IncorrectAnswersScreen;
