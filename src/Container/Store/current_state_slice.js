import { createSlice } from "@reduxjs/toolkit";


const createReducer=createSlice({
    name:'name',
    initialState:{
        name:'Home'
    },
    reducers:{
        setName:(state,action)=>{state.name=action.payload}
    }
})


export const {setName}= createReducer.actions;

export default createReducer.reducer;