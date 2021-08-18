import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type LoadingOption = {
  showStack: number;
};

export const show2 = createAsyncThunk(`loading/show2`, async () => {
  return 1;
});

export const loading = createSlice({
  name: 'loading',
  initialState: {
    showStack: 0,
  } as LoadingOption,
  reducers: {
    show(state) {
      state.showStack++;
      return state;
    },
    hide(state) {
      state.showStack--;
      return state;
    },
    clear(state) {
      state.showStack = 0;
      return state;
    },
  },
  extraReducers: {
    [show2.fulfilled.type]: (state, action: PayloadAction<any>) => {
      console.log(action.payload);
      state.showStack = action.payload;
    },
  },
});

export const { show, hide, clear } = loading.actions;
export default loading.reducer;
