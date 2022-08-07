import { INewsState, NewsAction, NewsActionTypes } from "../../types/NewsTypes";

export const initialState = {
  news: [],
  error: "",
};

export const NewsReducer = (
  state = initialState,
  action: NewsAction
): INewsState => {
  switch (action.type) {
    case NewsActionTypes.FETCH_NEWS:
      return {
        error: "",
        news: action.payload,
      };
    case NewsActionTypes.FETCH_NEWS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
