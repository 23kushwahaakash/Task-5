import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import profileReducer from "./profileSlice";
import jobReducer from "./jobSlice";

const store=configureStore({
    reducer:{
        auth: authReducer,
        profile: profileReducer,
        job: jobReducer,
    }
})

export default store;