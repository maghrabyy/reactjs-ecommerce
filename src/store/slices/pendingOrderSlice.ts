import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from '..';
import { CstInfoType, ShippingDetailsType } from '@/types/order-type';

export const usePendingOrderInfo = () =>
  useSelector((state: RootState) => state.pendingOrderInfo);

type pendingOrderInfoType = {
  cstInfo?: CstInfoType;
  shippingDetails?: ShippingDetailsType;
  enabledShippingFees?: boolean;
  amountDetail?: {
    subtotal: number;
    shippingFees: number;
    total: number;
  };
};

const initialState: pendingOrderInfoType = {
  cstInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNum: '',
  },
  shippingDetails: {
    city: '',
    address1: '',
    buildingNum: '',
    floorNum: '',
    aptNum: '',
  },
  enabledShippingFees: false,
  amountDetail: {
    subtotal: 0,
    shippingFees: 0,
    total: 0,
  },
};

const pendingOrderSlice = createSlice({
  name: 'pendingOrderInfo',
  initialState,
  reducers: {
    setCstInfo(
      state: pendingOrderInfoType,
      action: PayloadAction<pendingOrderInfoType>,
    ) {
      state.cstInfo = action.payload.cstInfo;
    },
    setShippingDetail(
      state: pendingOrderInfoType,
      action: PayloadAction<pendingOrderInfoType>,
    ) {
      state.shippingDetails = action.payload.shippingDetails;
      state.enabledShippingFees = true;
    },
    setAmountDetail(
      state: pendingOrderInfoType,
      action: PayloadAction<pendingOrderInfoType>,
    ) {
      state.amountDetail = action.payload.amountDetail;
    },
    resetOrderInfo() {
      return initialState;
    },
  },
});

export const {
  setCstInfo,
  setShippingDetail,
  setAmountDetail,
  resetOrderInfo,
} = pendingOrderSlice.actions;
export const pendingOrderReducer = pendingOrderSlice.reducer;
