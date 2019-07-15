import { takeEvery } from 'redux-saga/effects'
import { GET_USERS, ADD_USER } from '../../Constants/action'

import { getUsersWorker, addUserWorker } from '../workers/users'

export function* getUsers() {
  yield takeEvery( GET_USERS, getUsersWorker )
}

export function* addUser() {
  yield takeEvery( ADD_USER, addUserWorker )
}
