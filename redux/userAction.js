import {ADD_USER} from "./actionTypes"

export const add_user =(user)=>{
    return{
        type: ADD_USER,
        payload: user
    }
}