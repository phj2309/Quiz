import styled, {css} from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ScrollView = styled.ScrollView``;

export const Container = styled.View`
  padding: 30px;
  align-items: center;
  justify-content: center;
`;

export const FinishText = styled.Text`
  color: black;
  font-size: 30px;

  margin-bottom: 50px;
`;

export const BasicText = styled.Text<{active?: boolean}>`
  color: black;
  font-size: 15px;

  ${({active}) =>
    active &&
    css`
      color: white;
    `};
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

export const BtnWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

export const Btn = styled.TouchableOpacity<{active?: boolean}>`
  width: 49%;
  height: auto;
  padding: 5px 20px;
  border-radius: 20px;
  background-color: black;
  justify-content: center;
  align-items: center;

  ${({active}) =>
    active &&
    css`
      border: 1px black solid;
      background-color: white;
    `};
`;

export const QuestionText = styled.Text`
  color: black;
  font-size: 15px;
`;

export const AnswerContainer = styled.View`
  margin: 10px;
`;

export const AnswerText = styled.Text<{
  selected?: boolean;
  correct?: boolean;
  selectedAnswer?: string | null;
}>`
  color: black;
  font-size: 15px;

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

export const QuizContainer = styled.View`
  width: 100%;

  margin-bottom: 30px;
  justify-content: center;
`;
