import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INewsState, NewsInfo } from "../../types/NewsTypes";

export const initialState = {
  news: [],
  error: "",
  loading: false,
};
export const NewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    FetchNewsSuccess: (
      state: INewsState,
      action: PayloadAction<NewsInfo[]>
    ) => {
      state.news = action.payload;
      state.loading = false;
      state.error = "";
    },
    FetchNewsLoading: (state: INewsState) => {
      state.loading = true;
      state.error = "";
    },
    FetchNewsError: (state: INewsState) => {
      state.error = "Ошибка при загрузке новостей";
    },
  },
});
export const { FetchNewsSuccess, FetchNewsLoading, FetchNewsError } =
  NewsSlice.actions;
export default NewsSlice.reducer;
