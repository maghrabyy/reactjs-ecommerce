import { ProdType } from "@/types/product-type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "..";

export const useWishlist = ()=> useSelector((state:RootState)=>state.wishlist);

const initialState:ProdType[] = [] 

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState,
    reducers:{
        addToWishlist(state:ProdType[],action:PayloadAction<ProdType>){
            state.push(action.payload)
        },
        removeFromWishList(state:ProdType[],action:PayloadAction<ProdType>){
            const prodIndex = state.map(prod=>prod.prodId).indexOf(action.payload.prodId)
            state.splice(prodIndex,1)
        }
    }
})

export const wishlistReducer = wishlistSlice.reducer;
export const { addToWishlist, removeFromWishList } = wishlistSlice.actions;