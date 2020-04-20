import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from 'api';
import utils from 'utils';
import { LANGUAGE_ITEMS } from 'constants';

const initialState = {
  isLive: true,
  value: '',
  sourceLanguageItem: LANGUAGE_ITEMS[0],
  targetLanguageItem: LANGUAGE_ITEMS[1],
  kakao: '',
  naver: '',
};

const fetchTranslation = createAsyncThunk(
  '@TRANSLATION/fetchTranslation',
  (text, thunkApi) => {
    const { translation: { isLive, value, sourceLanguageItem, targetLanguageItem } } = thunkApi.getState();
    if (!isLive || !value) {
      return;
    }

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
    swapLanguage: (state, action) => {
      let temp = state.targetLanguageItem;
      state.targetLanguageItem = state.sourceLanguageItem;
      state.sourceLanguageItem = temp;
    },
    toggleLive: (state, action) => {
      state.isLive = !state.isLive;
    },
    copyToClipboard: (state, action) => {
      const { type } = action.payload;
      utils.copyToClipboard(state[type]);
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
