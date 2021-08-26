import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type HeaderOption = {
  visible: boolean;
  title: string;
  leftContextType: 'menu' | 'back' | 'none';
  rightContext: () => any;
  searchArea: boolean;
};

type ShowHeaderOption = {
  title: string;
  leftContextType: 'menu' | 'back' | 'none';
  rightContext: () => any;
};

export const headerOption = createSlice({
  name: 'headerOption',
  initialState: {
    visible: true,
    title: '',
    leftContextType: 'menu',
    rightContext: () => null,
    searchArea: false,
  } as HeaderOption,
  reducers: {
    showHeader(state, action: PayloadAction<ShowHeaderOption>): HeaderOption {
      return {
        ...state,
        ...action.payload,
        visible: true,
      };
    },
    hideHeader(state): HeaderOption {
      return {
        ...state,
        visible: false,
      };
    },
    setRightContext(state, action: PayloadAction<() => any>): HeaderOption {
      return {
        ...state,
        rightContext: action.payload,
      };
    },
  },
});

export const { showHeader, hideHeader } = headerOption.actions;
export default headerOption.reducer;
