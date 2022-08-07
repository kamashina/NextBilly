interface userInfo{
  email:string;
  avatarUrl: string;
  nickname: string;
}

export enum UserActionTypes{
  CHANGE_DATA = 'CHANGE_DATA',
  CHANGE_AUTH = 'CHANGE_AUTH',
  CHANGE_TOKEN = 'CHANGE_TOKEN',
}

export type userAction = FetchUserAction | FetchAuthAction

interface FetchUserAction{
  type: UserActionTypes.CHANGE_DATA;
  payload: userInfo;
}
interface FetchAuthAction{
  type: UserActionTypes.CHANGE_AUTH;
  payload: boolean ;
}

export const setAuth = (auth: boolean) => ({ 
type: UserActionTypes.CHANGE_AUTH,
payload: auth
})