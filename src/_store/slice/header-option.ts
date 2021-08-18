import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type HeaderOption = {
  visible: boolean;
  title: string;
  type: 'menu' | 'back' | 'menu&search';
  menuVisible: boolean;
  onClickSearch: () => void;
};

type ShowHeaderOption = {
  title: string;
  type: 'menu' | 'back' | 'menu&search';
  onClickSearch?: () => void;
};

export const headerOption = createSlice({
  name: 'headerOption',
  initialState: {
    visible: false,
    title: '',
    type: 'menu',
    menuVisible: false,
    onClickSearch: () => {},
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
    showMenu(state): HeaderOption {
      return {
        ...state,
        menuVisible: true,
      };
    },
    hideMenu(state): HeaderOption {
      return {
        ...state,
        menuVisible: false,
      };
    },
  },
});

export const { showHeader, hideHeader, showMenu, hideMenu } = headerOption.actions;
export default headerOption.reducer;
