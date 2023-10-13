import {combineReducers} from "@reduxjs/toolkit";

import authReducer from "../Slices/authSlice"
import profileReducer from "../Slices/Profile";


const rootReducer  = combineReducers({
    auth: authReducer,
    profile:profileReducer,
})

export default rootReducer