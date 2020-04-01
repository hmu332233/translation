import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

const translation = createSlice({
  name: '@TRANSLATION',
  initialState,
  reducers: {
    changeValue: (state, action) => {
      return { ...state, value: action.payload };
    }, 
  }
});

export const actions = translation.actions;
export default translation.reducer;