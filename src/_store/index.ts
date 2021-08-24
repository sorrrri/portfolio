import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import headerOption from './slice/header-option';
import toast from './slice/toast';

// 만들어 놓은 리듀서들을 합친다.
const reducer = combineReducers({
  headerOption,
  toast,
});

// React에서 사용할 수 있도록 타입을 만들어 export 해준다.
export type ReducerType = ReturnType<typeof reducer>;

const middleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer,
  middleware,
});

export type AppDispatch = typeof store.dispatch;
export default store;
