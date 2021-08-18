import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import gisServer from '../../_api/gis-backend';

export type User = {
  roles: string[];
  profile: any;
};

export const fetchRolesAndProfile = createAsyncThunk(`loginUser/fetchRolesAndProfile`, async () => {
  const rolesPayload = await gisServer.getRoles().then((payload) => {
    return payload?.response?.results?.map((_: any) => _.menu_code);
  });

  const profilePayload = await gisServer.getProfile().then((payload) => {
    return payload?.response;
  });

  return {
    roles: rolesPayload ?? [],
    profile: profilePayload ?? {},
  };
});

export const loginUser = createSlice({
  name: 'loginUser',
  initialState: {
    roles: [],
    profile: {},
  } as User,
  reducers: {},
  extraReducers: {
    [fetchRolesAndProfile.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.roles = action.payload.roles;
      state.profile = action.payload.profile;
    },
  },
});

export default loginUser.reducer;
