import { put } from 'redux-saga/effects'

import { ADD_HOBBY_SUCCESS, DELETE_HOBBY_SUCCESS } from '../../Constants/action'
import { AnyAction } from 'redux';
import { addHobby, deleteHobby } from '../../utils/mockData'

export function* addHobbyWorker( action: AnyAction ) {
  try {
    const { hobbyData } = action
    const updatedUsersHobbies = addHobby( hobbyData )
    yield put( { type: ADD_HOBBY_SUCCESS, updatedUsersHobbies } )
  } catch ( error ) {}
}

export function* deleteHobbyWorker( action: AnyAction ) {
  try {
    const { hobbyData } = action
    const deletedHobby = deleteHobby(hobbyData)
    console.log()
    yield put( { type: DELETE_HOBBY_SUCCESS, deletedHobby } )
  } catch ( error ) {}
}
