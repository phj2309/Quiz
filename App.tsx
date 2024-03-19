import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import type {
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainScreen from '@screens/MainScreen';
import QuizScreen from '@screens/QuizScreen';
import ResultScreen from '@screens/ResultScreen';
// import IncorrectAnswersScreen from '@screens/IncorrectAnswersScreen';

import store from '@store/index';

type RootStackParamList = {
  Main: undefined;
  Quiz: undefined;
  Result: {
    timeTaken: string;
    correctAnswers: number;
    incorrectAnswers: number;
  };
  // IncorrectAnswers: undefined;
};

export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{title: 'Quiz'}}
          />
          <Stack.Screen
            name="Quiz"
            component={QuizScreen}
            options={{title: '퀴즈 시작'}}
          />
          <Stack.Screen
            name="Result"
            component={ResultScreen}
            options={{title: '퀴즈 결과'}}
          />
          {/* <Stack.Screen
            name="IncorrectAnswers"
            component={IncorrectAnswersScreen}
            options={{title: '오답 노트'}}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
