import { all } from 'redux-saga/effects'

import { getUsers, addUser } from './watchers/user'
import { addHobby, deleteHobby } from './watchers/hobbies'

export default function* sagas() {
  return yield all([
    getUsers(),
    addUser(),
    addHobby(),
    deleteHobby(),
  ] )
}
