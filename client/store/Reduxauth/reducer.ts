import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userInfo } from "../../types/types";

export interface userState {
  data: userInfo[];
  loading: boolean;
  auth: boolean;
}

const initialState: userState = {
  data: [],
  loading: false,
  auth: false,
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
      action: PayloadAction<userInfo[]>
    ) => {
      state.data = action.payload;
      state.loading = false;
      state.auth = true;
    },
    UserLogout: (state: userState) => {
      state.auth = false;
    },
  },
});

export const { UserFetchingSuccess, UserLogout, UserLoad } = UserSlice.actions;
export default UserSlice.reducer;
