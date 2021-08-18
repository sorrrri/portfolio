import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import toastr from 'toastr';

export type ToastOption = {
  message: string;
  title?: string;
};

// slice 안에 들어갈 내용들은 매우 심플하고 직관적이다.
// name, initialState, reducers.
export const toast = createSlice({
  name: 'toast',
  initialState: {},
  reducers: {
    error(state, action: PayloadAction<ToastOption>) {
      const { message, title } = action.payload;
      toastr.error(message, title ?? '', {
        positionClass: 'toast-top-center',
        closeButton: true,
        tapToDismiss: true,
        progressBar: true,
        timeOut: 5000,
      });

      return state;
    },
    info(state, action: PayloadAction<ToastOption>) {
      const { message, title } = action.payload;
      toastr.info(message, title ?? '', {
        positionClass: 'toast-top-center',
        closeButton: true,
        tapToDismiss: true,
        progressBar: true,
        timeOut: 5000,
      });

      return state;
    },
  },
});

export const { error, info } = toast.actions;
export default toast.reducer;
