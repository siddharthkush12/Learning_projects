import { createSlice } from "@reduxjs/toolkit";

const initialState={          //to ask from store that user is authenticated or not
    status:false,
    userData:null
}

const authStoreSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload.userData;
        },

        logout:(state)=>{
            state.status=false;
            state.userData=null;
        }
    }
})

export const {login,logout} = authStoreSlice.actions;
export default authStoreSlice.reducer;