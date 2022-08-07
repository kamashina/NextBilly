import { UserActionTypes, userAction } from './action';
import { userState } from '../../types/types';



export const initialState = {
 data: {
  id: "0",
	email: "Ghost",
	nickname: 'Ghost',
	avatarUrl: "http://localhost:1983/uploads/KSeclybJMGg.jpg",
},
  auth: false,
};

export const UserReducer = (state = initialState, action: userAction): userState => {
  switch (action.type) {
    case UserActionTypes.CHANGE_DATA:
      return {
        ...state,
        data: action.payload,
      }
       case UserActionTypes.CHANGE_AUTH:
       return{
        ...state,
        auth: action.payload,
       }
      default:
      return state;
  }
};
