import { Dispatch } from "react";
import axios from "axios";
import { NewsAction, NewsActionTypes } from "../../types/NewsTypes";

export const fetchNewsAction = (
  API_KEY_NEWS: string,
  search: string,
  NowDate: string
) => {
  return async (dispatch: Dispatch<NewsAction>) => {
    await axios
      .get(
        `https://newsapi.org/v2/top-headlines?q=${search}&from=${NowDate}&apiKey=${API_KEY_NEWS}`
      )
      .then((response) => {
        dispatch({
          type: NewsActionTypes.FETCH_NEWS,
          payload: response.data.articles,
        });
      })
      .catch((error) => {
        dispatch({
          type: NewsActionTypes.FETCH_NEWS_ERROR,
          payload: "Произошла ошибка при загрузке новостей",
        });
      });
  };
};
