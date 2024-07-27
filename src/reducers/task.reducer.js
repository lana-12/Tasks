/**
 * Create le reducer de task
 */

import { ADD_TASK, DELETE_TASK, EDIT_TASK, GET_TASKS } from "../actions/task.action";

const initialState = { };

export default function taskReducer(state = initialState, action){
    // return state; => faire ca en premier

    //Switch

    switch (action.type) {

        case GET_TASKS:
            return action.payload;

        case ADD_TASK:
            return [action.payload, ...state];

        case EDIT_TASK:
            return state.map((task)=> {
                if(task.id === action.payload.id) {
                    return {
                        ...task,
                        done: action.payload.done
                    }
                }
            })

        case DELETE_TASK:
            return state.filter((task) => task.id != action.payload) 
             
        default:
           return state;
    }


}