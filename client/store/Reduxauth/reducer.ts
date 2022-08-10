import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userInfo, userState } from "../../types/UserTypes";

const initialState: userState = {
  data: {
    id: "",
    email: "",
    avatarUrl: "",
    nickname: "",
  },
  loading: false,
  auth: false,
  error: "",
};
export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    UserLoad: (state: userState) => {
      state.loading = true;
      console.log("ЗАгрузка/////");
    },
    UserFetchingSuccess: (
      state: userState,
      action: PayloadAction<userInfo>
    ) => {
      state.data = action.payload;
      state.loading = false;
      state.auth = true;
    },
    UserLogout: (state: userState) => {
      state.auth = false;
    },
    UserFetchError: (state: userState) => {
      state.loading = false;
      state.error = "Пользователь не найден";
    },
  },
});

export const { UserFetchingSuccess, UserLogout, UserLoad, UserFetchError } =
  UserSlice.actions;
export default UserSlice.reducer;
