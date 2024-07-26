import { OrderStatuses, OrderType } from "@/types/order-type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "..";


export const useOrders = ()=> useSelector((state:RootState)=>state.orders);

const initialState:OrderType[] = []

type statusUpdatePayloadType = {
    orderId:string,
    newStatus:keyof typeof OrderStatuses
}
const ordersSlice = createSlice({
    name:'Orders',
    initialState,
    reducers:{
        addOrder(state:OrderType[],action:PayloadAction<OrderType>){
            state.push(action.payload)
        },
        updateOrderStatus(state:OrderType[],action:PayloadAction<statusUpdatePayloadType>){
            const orderIndex = state.map(order=>order.orderId).indexOf(action.payload.orderId)
            state[orderIndex].orderStatus = action.payload.newStatus
        }
    }
})

export const ordersReducer = ordersSlice.reducer
export const { addOrder, updateOrderStatus } = ordersSlice.actions