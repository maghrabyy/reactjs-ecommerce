import { configureStore } from '@reduxjs/toolkit';
import { shoppingCartReducer } from './slices/shoppingCartSlice';
import { drawerTogglerReducer } from './slices/drawerTogglerSlice';

export const store = configureStore({
    reducer:{
        shoppingCartItems:shoppingCartReducer,
        drawerToggler:drawerTogglerReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false,
    })
})


export type RootState = ReturnType<typeof store.getState>
