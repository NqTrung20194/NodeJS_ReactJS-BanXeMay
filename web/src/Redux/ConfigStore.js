import {applyMiddleware,combineReducers,createStore} from "redux"
import reduxThunk from "redux-thunk";
import { adminReducer } from "./Reducers/adminReducer";

const rootReducer = combineReducers(
    {
         adminReducer
    }
);

export const store = createStore(
    rootReducer,applyMiddleware(reduxThunk)
);