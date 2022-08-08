import { Dispatch } from "react";
import axios from "axios";
import { NewsAction, NewsActionTypes } from "../../types/NewsTypes";
import { NewsSlice } from "../News/reducer";
import { AppDispatch } from "../index";

export const fetchNewsAction = (
  API_KEY_NEWS: string,
  search: string,
  NowDate: string
) => {
  return async (dispatch: AppDispatch) => {
    dispatch(NewsSlice.actions.FetchNewsLoading());
    await axios
      .get(
        `https://newsapi.org/v2/top-headlines?q=${search}&from=${NowDate}&apiKey=${API_KEY_NEWS}`
      )
      .then((response) => {
        dispatch(NewsSlice.actions.FetchNewsSuccess(response.data.articles));
      })
      .catch(() => {
        dispatch(NewsSlice.actions.FetchNewsError());
      });
  };
};
