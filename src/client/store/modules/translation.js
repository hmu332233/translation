import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from 'utils/api';

const initialState = {
  value: '',
};

const fetchTranslation = createAsyncThunk(
  '@TRANSLATION/fetchTranslation',
  text => api.getTranslation({ text }).then(res => res.data)
)

const translation = createSlice({
  name: '@TRANSLATION',
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload;
    }, 
  },
  extraReducers: {
    [fetchTranslation.pending]: (state, action) => {},
    [fetchTranslation.fulfilled]: (state, action) => {
      state.kakao = action.payload.kakao;
      state.naver = action.payload.naver;
    },
    [fetchTranslation.rejected]: (state, action) => {}
  }
});

export const actions = {
  ...translation.actions,
  fetchTranslation,
};
export default translation.reducer;