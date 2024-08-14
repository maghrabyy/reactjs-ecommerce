import { OrderType, OrderItem } from '@/types/order-type';
import { Divider } from 'antd';
import { Badge } from '../ui/badge';

type OrdersListProps = {
  orders: OrderType[];
};

export const OrdersList = ({ orders }: OrdersListProps) => {
  return orders
    .map((order) => {
      const orderSubtotal = order.totalOrderAmount - order.shippingFees;
      return (
        <div
          key={order.orderId}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center shadow-md p-4 rounded-md"
        >
          <div className="cst-info col-span-3">
            <div className="order-status flex justify-between">
              <h1>
                Order ID:{' '}
                <span className="font-bold">
                  {order.orderId.substring(0, order.orderId.indexOf('-'))}
                </span>
              </h1>
              <Badge>{order.orderStatus}</Badge>
            </div>
            <h3>
              {order.orderDate.toLocaleString('en-AU', {
                hour12: true,
                minute: '2-digit',
                hour: '2-digit',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </h3>
            <Divider />
            <h1>
              Subtotal:{' '}
              <span className="font-semibold">
                {orderSubtotal.toLocaleString()} EGP
              </span>
            </h1>
            <h1>
              Shipping fees:{' '}
              <span className="font-semibold">{order.shippingFees} EGP</span>
            </h1>
            <h1 className="font-bold text-3xl">
              {order.totalOrderAmount.toLocaleString()} EGP
            </h1>
            <h3>
              Payment Method:{' '}
              <span className="font-bold">{order.paymentMethod}</span>
            </h3>
            <Divider />
            <h3 className="font-semibold">Destination Address</h3>
            <h3>
              {order.shippingDetails.address1},{' '}
              {order.shippingDetails.address2 && (
                <span>{order.shippingDetails.address2},</span>
              )}{' '}
              {order.shippingDetails.city}
            </h3>
            <h3>
              Building: {order.shippingDetails.buildingNum}, Floor:{' '}
              {order.shippingDetails.floorNum}, Apt:{' '}
              {order.shippingDetails.aptNum}
            </h3>
          </div>
          <div className="order-items divide-y-2">
            {order.orderItems
              .map((orderItem: OrderItem) => {
                const itemData = orderItem.item;
                const itemAmount = itemData.offer
                  ? (
                      itemData.prodPrice -
                      itemData.prodPrice * itemData.offer
                    ).toLocaleString()
                  : itemData.prodPrice.toLocaleString();
                return (
                  <div
                    key={orderItem.item.prodId}
                    className="cart-item grid gap-4 grid-cols-4 pt-2"
                  >
                    <div className="cart-item-img h-[100px] flex justify-center overflow-hidden">
                      <img
                        className="object-contain"
                        src={itemData.prodImg}
                        alt={itemData.prodDesc}
                      />
                    </div>
                    <div className="cart-item-details col-span-3">
                      <h2 className="font-bold">
                        {itemData.prodBrand.brandTitle} {itemData.prodTitle}{' '}
                        <span className="qty ">x {orderItem.itemQuantity}</span>
                      </h2>
                      <h3 className="prod-amount text-gray-700">
                        Amount: {itemAmount} EGP
                      </h3>
                      <h2 className="desc text-gray-700 truncate">
                        {itemData.prodDesc}
                      </h2>
                      {itemData.prodColor && (
                        <h2 className="color text-gray-700">
                          Color: {itemData.prodColor}
                        </h2>
                      )}
                      <h3 className="price text-gray-700 font-bold">
                        {orderItem.itemSubtotal.toLocaleString()} EGP
                      </h3>
                    </div>
                  </div>
                );
              })
              .reverse()}
          </div>
        </div>
      );
    })
    .reverse();
};
