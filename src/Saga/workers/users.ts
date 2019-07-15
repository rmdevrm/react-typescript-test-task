import { put } from 'redux-saga/effects'

import { GET_USERS_SUCCESS, ADD_USER_SUCCESS } from '../../Constants/action'
import { AnyAction } from 'redux';
import { initialMockData, addUser } from '../../utils/mockData'

export function* getUsersWorker() {
  try {
    const users = [...initialMockData]
    yield put( { type: GET_USERS_SUCCESS, users } )
  } catch ( error ) {}
}

export function* addUserWorker( action: AnyAction ) {
  try {
    const { userName } = action
    const usersData = addUser( userName )

    yield put( { type: ADD_USER_SUCCESS, usersData } )
  } catch ( error ) {}
}
