import { instance } from "../../axios";
import { UserSlice } from "../Reduxauth/reducer";
import { userInfo } from "../../types/types";
import { AppDispatch } from "../index";

if (typeof window !== "undefined") {
  window.localStorage.getItem("token");
}
export const AxiosUserAction = () => async (dispatch: AppDispatch) => {
  dispatch(UserSlice.actions.UserLoad());
  await instance
    .get<userInfo[]>("/auth/me", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((response) => {
      dispatch(UserSlice.actions.UserFetchingSuccess(response.data));
    });
};
