import { ShoppingCartType } from '@/types/shopping-cart-type';
import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from '..';

const initialState: ShoppingCartType[] = [];

export const useShoppingCartItems = ()=> useSelector((state:RootState)=>state.shoppingCartItems)
const shoppingCartSlice = createSlice({
    name:'shoppingCart',
    initialState,
    reducers:{
        addItemToCart(state:ShoppingCartType[],action:PayloadAction<ShoppingCartType>){
            if(!state.map(cartItem=>cartItem.item.prodId).includes(action.payload.item.prodId)){
                state.push(action.payload)
            }
        },
        removeItemFromCart(state:ShoppingCartType[],action:PayloadAction<ShoppingCartType>){
            const itemIndex = state.map(item=>item.itemId).indexOf(action.payload.itemId)
            state = state.splice(itemIndex,1)
        },
        incrementItemQuantity(state:ShoppingCartType[],action:PayloadAction<ShoppingCartType>){
            const itemIndex = state.map(item=>item.itemId).indexOf(action.payload.itemId)
            state[itemIndex].itemQuantity += 1;
        },
        decrementItemQuantity(state:ShoppingCartType[],action:PayloadAction<ShoppingCartType>){
            const itemIndex = state.map(item=>item.itemId).indexOf(action.payload.itemId)
            state[itemIndex].itemQuantity -= 1;
        }
    }
})

export const {addItemToCart, removeItemFromCart, incrementItemQuantity,decrementItemQuantity} = shoppingCartSlice.actions
export const shoppingCartReducer = shoppingCartSlice.reducer;