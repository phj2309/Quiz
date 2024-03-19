import React from 'react';
import {Dimensions} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {PieChart} from 'react-native-chart-kit';
import {RootStackScreenProps} from '@/App';
import * as STC from './ResultScreen.style';

const screenWidth = Dimensions.get('window').width;

const ResultScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RootStackScreenProps<'Result'>['route']>();
  const {timeTaken, correctAnswers, incorrectAnswers} = route.params;

  const totalQuestions = correctAnswers + incorrectAnswers;
  const chartData = [
    {
      name: `/ ${totalQuestions} 정답 개수`,
      count: correctAnswers,
      color: 'blue',
      legendFontColor: 'blue',
      legendFontSize: 15,
    },
    {
      name: `/ ${totalQuestions} 오답 개수`,
      count: incorrectAnswers,
      color: 'red',
      legendFontColor: 'red',
      legendFontSize: 15,
    },
  ];

  const handleRetryQuiz = () => {
    navigation.navigate('Quiz');
  };

  const goToIncorrectAnswers = () => {
    navigation.navigate('IncorrectAnswers');
  };

  return (
    <STC.SafeArea>
      <STC.Container>
        <STC.FinishText>퀴즈 완료</STC.FinishText>
        <STC.BasicText>소요 시간: {timeTaken}</STC.BasicText>

        <PieChart
          data={chartData}
          width={screenWidth * 0.8}
          height={150}
          chartConfig={{
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor="count"
          backgroundColor="transparent"
          absolute
          paddingLeft="0"
        />
        <STC.BtnWrapper>
          <STC.Btn active={true} onPress={handleRetryQuiz}>
            <STC.BasicText>다시 풀기</STC.BasicText>
          </STC.Btn>
          <STC.Btn onPress={goToIncorrectAnswers}>
            <STC.BasicText active={true}>오답 노트</STC.BasicText>
          </STC.Btn>
        </STC.BtnWrapper>
      </STC.Container>
    </STC.SafeArea>
  );
};

export default ResultScreen;
