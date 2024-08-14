import { useOrders } from '@/store/slices/orderSlice';
import { OrdersList } from '@/components/Orders-comp/ordersList';
import { EmptyOrdersList } from '@/components/Orders-comp/emptyOrdersList';

export const OrdersPage = () => {
  const orders = useOrders();
  return (
    <div className="orders-page section space-y-4">
      <h1 className="text-2xl py-2">My Orders</h1>

      <div className="orders-list">
        {orders.length > 0 ? (
          <OrdersList orders={orders} />
        ) : (
          <EmptyOrdersList />
        )}
      </div>
    </div>
  );
};
