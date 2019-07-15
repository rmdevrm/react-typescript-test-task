import { ADD_HOBBY, DELETE_HOBBY } from "../Constants/action";

export const addUserHobbyData = (hobbyData: object) : object => ({
    type: ADD_HOBBY, hobbyData
})

export const deleteUserHobbyData = (hobbyData: object) : object => ({
    type: DELETE_HOBBY, hobbyData
})