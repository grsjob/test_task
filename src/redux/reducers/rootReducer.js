import {combineReducers} from "redux";
import {chipsReducer} from "./chipsReducer";

export const rootReducer = combineReducers({
        chips: chipsReducer
    }
)