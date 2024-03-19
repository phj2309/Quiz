import React, {useCallback} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {fetchQuiz} from '@slices/quizSlice';
import {useAppDispatch} from '@shared/useRedux';

import * as STC from './MainScreen.style';

const MainScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const goToQuizScreen = () => {
    navigation.navigate('Quiz');
  };

  useFocusEffect(
    useCallback(() => {
      (async () => {
        await dispatch(fetchQuiz());
      })();
    }, []),
  );

  return (
    <STC.SafeArea>
      <STC.QuizButton onPress={goToQuizScreen}>
        <STC.QuizText>퀴즈 풀기</STC.QuizText>
      </STC.QuizButton>
    </STC.SafeArea>
  );
};

export default MainScreen;
