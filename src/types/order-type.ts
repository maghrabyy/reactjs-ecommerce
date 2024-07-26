import { ProdType } from './product-type';

export type CstInfoType = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNum: string;
};

export type ShippingDetailsType = {
  city: string;
  address1: string;
  address2?: string;
  buildingNum: string;
  floorNum: string;
  aptNum: string;
};

export enum OrderStatuses {
  pending,
  shipped,
  arrived,
  cancelled,
  refunded,
}

export type OrderType = {
  orderId: string;
  item: ProdType;
  itemAmount: number;
  shippingFees: number;
  totalOrderAmount: () => number;
  paymentMethod: string;
  cstInfo: CstInfoType;
  shippingDetails: ShippingDetailsType;
  orderStatus: keyof typeof OrderStatuses;
};
