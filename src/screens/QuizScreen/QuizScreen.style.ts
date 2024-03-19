import styled, {css} from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.ScrollView`
  flex-grow: 1;
  width: 100%;
  padding: 30px;
`;

export const BasicText = styled.Text<{active?: string}>`
  color: black;
  font-size: 15px;

  ${({active}) =>
    active === '오답입니다.' &&
    `
    color: red;
  `};

  ${({active}) =>
    active === '정답입니다.' &&
    `
    color: blue;
  `};
`;

export const QuizButton = styled.TouchableOpacity`
  width: auto;
  height: 40px;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px black solid;
`;

export const QuestionText = styled.Text`
  color: black;
  font-size: 15px;
`;

export const AnswerContainer = styled.TouchableOpacity`
  margin: 10px;
  flex-direction: row;
`;

export const AnswerText = styled.Text<{
  selected?: boolean;
  correct?: boolean;
  selectedAnswer?: string | null;
}>`
  color: black;
  font-size: 15px;
  margin-left: 7px;

  ${({selected, correct, selectedAnswer}) =>
    selectedAnswer !== null &&
    selected &&
    !correct &&
    `
      color: red;
    `}

  ${({selected, correct, selectedAnswer}) =>
    selectedAnswer !== null &&
    (selected || correct) &&
    correct &&
    `
      color: blue;
    `}
`;

export const TextWrapper = styled.View`
  width: 100%;
  height: auto;
  padding: 5px 20px;
  border-radius: 20px;
  border: 1px black solid;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const NextButton = styled.TouchableOpacity`
  width: 100%;
  height: auto;
  padding: 5px 20px;
  border-radius: 20px;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

export const NextText = styled.Text`
  color: white;
  font-size: 15px;
`;
