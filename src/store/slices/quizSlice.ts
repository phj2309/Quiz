import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';

import RequestStatus, {defaultState} from '@shared/RequestStatus';
import {IQuizInitState, IncorrectAnswer} from '@type/slice/quizType';
import * as api from '@api/quizApi';

const initialState: IQuizInitState = {
  question: {
    ...defaultState,
    results: [],
  },
  incorrectAnswers: [],
};

export const fetchQuiz = createAsyncThunk('quiz/fetchQuiz', async () => {
  const response = await api.fetchQuiz();
  return response;
});

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    addIncorrectAnswer: (state, action: PayloadAction<IncorrectAnswer>) => {
      state.incorrectAnswers.push(action.payload);
    },
    resetIncorrectAnswers: state => {
      state.incorrectAnswers = initialState.incorrectAnswers;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchQuiz.pending, state => {
        state.question.status = RequestStatus.IN_PROGRESS;
      })
      .addCase(fetchQuiz.rejected, state => {
        state.question.status = RequestStatus.FAIL;
      })
      .addCase(fetchQuiz.fulfilled, (state, {payload}) => {
        state.question.status = RequestStatus.SUCCESS;
        state.question.results = payload.results;
      });
  },
});

export const {addIncorrectAnswer, resetIncorrectAnswers} = quizSlice.actions;

export default quizSlice.reducer;
