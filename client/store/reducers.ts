import { combineReducers } from 'redux';
import { UserReducer } from './Reduxauth/reducer';
import { NewsReducer } from './News/reducer';

export const rootReducer = combineReducers({
  authorization: UserReducer,
  getnews: NewsReducer
});

export type RootState = ReturnType<typeof rootReducer>
