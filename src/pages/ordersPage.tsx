import { useOrders } from '@/store/slices/orderSlice';

export const OrdersPage = () => {
  const orders = useOrders();
  return <div className="orders-page"></div>;
};
