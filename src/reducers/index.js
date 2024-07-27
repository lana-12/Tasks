/**
 * Faire des reducers pour chaque partie au besoin (comme Users ou Posts ou Tasks)
 */

import { combineReducers } from "redux";
import taskReducer from "./task.reducer";

export default combineReducers({

    // All reducers 
    taskReducer,


});