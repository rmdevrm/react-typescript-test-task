import { GET_USERS, ADD_USER } from "../Constants/action";

export const getUsersData = () => { return{
    type: GET_USERS
}}

export const addUserData = (userName: string) => ({
    type: ADD_USER, userName
})