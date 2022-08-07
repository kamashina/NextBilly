import { Dispatch } from "redux";
import { instance } from "../../axios";
import { UserActionTypes, userAction, setAuth } from "../Reduxauth/action";

if (typeof window !== "undefined") {
  window.localStorage.getItem("token");
}
export const AxiosUserAction = () => async (dispatch: Dispatch<userAction>) => {
  await instance
    .get("/auth/me", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((response: any) => {
      dispatch({ type: UserActionTypes.CHANGE_DATA, payload: response.data });
      dispatch(setAuth(true));
    });
};
