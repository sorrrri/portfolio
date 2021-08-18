import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import loginUser from './slice/login-user';
import headerOption from './slice/header-option';
import mapLayer from './slice/map-layer';
import toast from './slice/toast';
import loading from './slice/loading';

// 만들어 놓은 리듀서들을 합친다.
const reducer = combineReducers({
  loginUser,
  headerOption,
  mapLayer,
  toast,
  loading,
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
