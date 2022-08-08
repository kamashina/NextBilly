import { combineReducers } from "redux";
import NewsReducer from "./News/reducer";
import UserReducer from "./Reduxauth/reducer";

export const rootReducer = combineReducers({
  authorization: UserReducer,
  getnews: NewsReducer,
});
