export interface IPosts {
  nickname: string;
  value: string;
}

export interface userState {
  data: userInfo;
  loading: boolean;
  auth: boolean;
  error: string;
}
export interface userInfo {
  id: string;
  email: string;
  avatarUrl: string;
  nickname: string;
}
