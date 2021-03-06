import { ADD_USER } from "../actionTypes";

const initialState= {
    user: []
}

export const userReducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_USER:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}