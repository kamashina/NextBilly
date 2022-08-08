export interface INewsState {
  news: NewsInfo[];
  error: string;
  loading: boolean;
}
export interface NewsInfo {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: Object;
  id: string;
  name: string;
  title: string;
  url: string;
  urlToImage: string;
}

export enum NewsActionTypes {
  FETCH_NEWS = "FETCH_NEWS",
  FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR",
}
interface FetchNewsAction {
  type: NewsActionTypes.FETCH_NEWS;
  payload: NewsInfo[];
}
interface FetchNewsErrorAction {
  type: NewsActionTypes.FETCH_NEWS_ERROR;
  payload: string;
}
export type NewsAction = FetchNewsAction | FetchNewsErrorAction;
