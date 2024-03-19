import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from './MainScreen';

const mockStore = configureStore([]);
const store = mockStore({});

jest.mock('@slices/quizSlice', () => ({
  fetchQuiz: jest.fn(() => Promise.resolve()),
}));

describe('MainScreen 컴포넌트 UI 테스트', () => {
  it('"퀴즈 풀기" 버튼이 정상적으로 렌더링되는지 확인', () => {
    const {getByText} = render(
      <Provider store={store}>
        <NavigationContainer>
          <MainScreen />
        </NavigationContainer>
      </Provider>,
    );

    // "퀴즈 풀기" 버튼이 있는지 확인
    expect(getByText('퀴즈 풀기')).toBeTruthy();
  });
});
