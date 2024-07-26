import { configureStore } from '@reduxjs/toolkit';
import { shoppingCartReducer } from './slices/shoppingCartSlice';
import { drawerTogglerReducer } from './slices/drawerTogglerSlice';
import { pendingOrderReducer } from './slices/pendingOrderSlice';
import { ordersReducer } from './slices/orderSlice';
import { wishlistReducer } from './slices/wishlistSlice';

export const store = configureStore({
  reducer: {
    shoppingCartItems: shoppingCartReducer,
    drawerToggler: drawerTogglerReducer,
    pendingOrderInfo: pendingOrderReducer,
    orders: ordersReducer,
    wishlist: wishlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
