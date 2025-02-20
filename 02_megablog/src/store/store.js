import { configureStore } from "@reduxjs/toolkit";
import authStoreSlice from '../features/authStoreSlice'

const store=configureStore({
    reducer:{
        auth:authStoreSlice,
    }
})


export default store;