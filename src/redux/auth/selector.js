import { createSelector } from "@reduxjs/toolkit";

// trỏ đến state của reducer authentication
export const selectAuthen = (state) => state.auth;

// trỏ đến item auth của authSlice
const selectAuth = createSelector(
  [selectAuthen],
  (authSlice) => authSlice?.auth
);
export const selectIsfetching = createSelector(
  [selectAuthen],
  (authSlice) => authSlice?.isFetching
)

//---------------user--------------------------------

export const selectUser = createSelector([selectAuth], (auth) => auth?.data?.user);

export const selectRole = createSelector([selectUser], (user) => user?.role);

export const selectDeviceId = createSelector(
  [selectAuth],
  (auth) => auth?.data?.deviceId,
);

export const selectUsernameAuth = createSelector(
  [selectUser],
  (user) => user?.username
);

export const selectAvatar = createSelector(
  [selectUser],
  (user) => user?.avatar
);

export const selectEmail = createSelector([selectUser], (user) => user?.email);

export const selectUserID = createSelector(
  [selectUser],
  (user) => user?.id
);

//---------------tokens--------------------------------

const selectTokens = createSelector([selectAuth], (auth) => auth?.data?.tokens);

export const selectAccessToken = createSelector(
  [selectTokens],
  (tokens) => tokens?.access.token
);

export const selectRefreshToken = createSelector(
  [selectTokens],
  (tokens) => tokens?.refresh.token
);


