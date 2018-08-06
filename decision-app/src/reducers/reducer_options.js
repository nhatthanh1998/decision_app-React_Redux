import { FETCH_OPTIONS } from "../action";


export default function(state = null,action){
    switch(action.type){
        case FETCH_OPTIONS:{
            return action.payload
        }
    }
    return state
}