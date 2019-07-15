import { ADD_USER_SUCCESS, GET_USERS_SUCCESS, ADD_HOBBY_SUCCESS, DELETE_HOBBY_SUCCESS } from "../Constants/action";
import { AnyAction } from "redux";
import { IUserState } from "../Interfaces/state";

const initialState: Array<IUserState> = [];

function userReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case ADD_USER_SUCCESS:
      const { usersData } = action
      return [...state, usersData]
    case GET_USERS_SUCCESS:
      return action.users
    case ADD_HOBBY_SUCCESS:
      const { updatedUsersHobbies } = action
      const { user } = updatedUsersHobbies
      const newHobbyState = [...state]
      const index = newHobbyState.findIndex(exUser => exUser.id === user.id)
      const data = state.map( element => { if( element.id === user.id) { return user }; return element } )      
      newHobbyState.splice(index, 1)
      newHobbyState.push(user)
      return data
    case DELETE_HOBBY_SUCCESS:
      const { deletedHobby } = action
      const { userId, hobbyId } = deletedHobby
      const userData = state.find(user => user.id === userId)
      if ( !userData ) return
      const hobbyIndex = userData.hobbies.findIndex( hobby => hobby.id === hobbyId )
      userData.hobbies.splice( hobbyIndex, 1 )
      const updatedData = state.map( element => { if( element.id === userId) { return userData }; return element } )
        return updatedData
    default:
      return state;
  }
}

export default userReducer
