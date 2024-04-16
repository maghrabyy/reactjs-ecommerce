import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { useSelector } from "react-redux";

export const useDrawerToggler = ()=> useSelector((state:RootState)=>state.drawerToggler);


const drawerTogglerSlice = createSlice({
    name:'drawerToggler',
    initialState:false,
    reducers:{
        toggleDrawer(state:boolean){
            return !state
        }
    }
})

export const { toggleDrawer } = drawerTogglerSlice.actions
export const drawerTogglerReducer = drawerTogglerSlice.reducer;