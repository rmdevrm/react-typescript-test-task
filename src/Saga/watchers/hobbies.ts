import { takeLatest } from 'redux-saga/effects'
import { ADD_HOBBY, DELETE_HOBBY } from '../../Constants/action'

import { addHobbyWorker, deleteHobbyWorker } from '../workers/hobbies'

export function* addHobby() {
  yield takeLatest( ADD_HOBBY, addHobbyWorker )
}

export function* deleteHobby() {
  yield takeLatest( DELETE_HOBBY, deleteHobbyWorker )
}
