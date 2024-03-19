import styled, {css} from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const Round = styled.View`
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: black;
  border-radius: 10px;
`;

export const SelectedRound = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 6px;
  background-color: black;
`;

export const Text = styled.Text`
  margin-left: 5px;
  color: black;
  font-size: 10px;
`;
