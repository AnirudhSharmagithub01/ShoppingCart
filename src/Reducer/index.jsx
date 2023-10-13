import {combineReducers} from "@reduxjs/toolkit";

import authReducer from "../Slices/authSlice"
import profileReducer from "../Slices/Profile";
import CartReducer from "../Slices/CartSlice";


const rootReducer  = combineReducers({
    auth: authReducer,
    profile:profileReducer,
    cart:CartReducer,
})

export default rootReducer