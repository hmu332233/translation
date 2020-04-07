import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from 'utils/api';
import { LANGUAGE_ITEMS } from 'constants';

const initialState = {
  value: '',
  sourceLanguageItem: LANGUAGE_ITEMS[0],
  targetLanguageItem: LANGUAGE_ITEMS[1],
};

const fetchTranslation = createAsyncThunk(
  '@TRANSLATION/fetchTranslation',
  (text, thunkApi) => {
    const { translation: { value, sourceLanguageItem, targetLanguageItem } } = thunkApi.getState();
    return api
      .getTranslation({
        text: value,
        source: sourceLanguageItem.value,
        target: targetLanguageItem.value,
      })
      .then(res => res.data);
  }
);

const translation = createSlice({
  name: '@TRANSLATION',
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload;
    },
    changeLanguageItem: (state, action) => {
      if (action.payload.sourceLanguageItem) {
        state.sourceLanguageItem = action.payload.sourceLanguageItem;
      }
      if (action.payload.targetLanguageItem) {
        state.targetLanguageItem = action.payload.targetLanguageItem;
      }
    },
  },
  extraReducers: {
    [fetchTranslation.pending]: (state, action) => {},
    [fetchTranslation.fulfilled]: (state, action) => {
      state.kakao = action.payload.kakao;
      state.naver = action.payload.naver;
    },
    [fetchTranslation.rejected]: (state, action) => {},
  },
});

export const actions = {
  ...translation.actions,
  fetchTranslation,
};
export default translation.reducer;
