import { combineReducers } from 'redux'

import userReducer from './userReducer'
import { IState } from '../Interfaces/state';

const reducers = combineReducers<IState>({
  users: userReducer,
})

export default reducers
