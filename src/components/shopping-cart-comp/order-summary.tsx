import { SquareArrowOutUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import visaLogo from '@/assets/payment/visa.png';
import mastercardLogo from '@/assets/payment/mastercard.png';
import paypalLogo from '@/assets/payment/paypal.png';
import valuLogo from '@/assets/payment/valu.png';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useShoppingCartItems } from '@/store/slices/shoppingCartSlice';
import { FaEdit } from 'react-icons/fa';
import { usePendingOrderInfo } from '@/store/slices/pendingOrderSlice';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ShoppingCartType } from '@/types/shopping-cart-type';

export const OrderSummary = () => {
  const enabledShippingFees = usePendingOrderInfo().enabledShippingFees;
  const shoppingCartItems = useShoppingCartItems();
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const { amountDetail } = usePendingOrderInfo();
  return (
    <div className="order-summary px-4 panel self-baseline md:sticky top-28">
      <h2 className="font-bold text-center py-4">Order Summary</h2>
      <div className="order-price space-y-2 border-b border-slate-300 pb-4">
        <div className="order-section flex justify-between">
          <h3>Subtotal</h3>
          <h3 className="font-bold">
            {amountDetail?.subtotal.toLocaleString()} EGP
          </h3>
        </div>
        {enabledShippingFees && (
          <div className="order-section flex justify-between">
            <h3>Shipping Fees</h3>
            <h3 className="font-bold">
              {amountDetail?.shippingFees === 0
                ? 'Free shipping'
                : amountDetail?.shippingFees + ' EGP'}
            </h3>
          </div>
        )}
      </div>
      {enabledShippingFees && (
        <div className="total-amount">
          <h2 className="font-bold text-center py-4">Total Amount</h2>
          <h3 className="font-bold text-4xl text-center">{`${amountDetail?.total.toLocaleString()} EGP`}</h3>
        </div>
      )}
      <div className="order-action flex flex-col items-center gap-4 py-4">
        <h3>Accepted payments</h3>
        <div className="accepted-payments imgs grid grid-cols-4 items-center gap-2">
          <img src={visaLogo} alt="visa payment logo" />
          <img src={mastercardLogo} alt="mastercard payment logo" />
          <img src={paypalLogo} alt="paypal payment logo" />
          <img src={valuLogo} alt="valu payment logo" />
        </div>
        {location === '/shopping-cart' ? (
          <Button
            onClick={() => navigate('shipping-details')}
            className="self-stretch flex gap-2"
          >
            Proceed to checkout <SquareArrowOutUpRight />
          </Button>
        ) : (
          <div className="items-in-order self-start w-full">
            <Accordion type="single" collapsible>
              <AccordionItem value="ItemsInOrder">
                <AccordionTrigger>
                  Items in order ({shoppingCartItems.length})
                </AccordionTrigger>
                <AccordionContent className="space-y-2">
                  {shoppingCartItems
                    .map((cartItem: ShoppingCartType) => {
                      const itemData = cartItem.item;
                      const itemAmount = itemData.offer
                        ? (
                            itemData.prodPrice -
                            itemData.prodPrice * itemData.offer
                          ).toLocaleString()
                        : itemData.prodPrice.toLocaleString();
                      return (
                        <div
                          key={cartItem.itemId}
                          className="cart-item grid gap-4 grid-cols-4"
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
                              {itemData.prodBrand.brandTitle}{' '}
                              {itemData.prodTitle}{' '}
                              <span className="qty ">
                                x {cartItem.itemQuantity}
                              </span>
                            </h2>
                            <h3 className="prod-amount text-gray-700">
                              Item amount: {itemAmount} EGP
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
                              {cartItem.totalPrice().toLocaleString()} EGP
                            </h3>
                          </div>
                        </div>
                      );
                    })
                    .reverse()}
                  <h2
                    onClick={() => navigate('/shopping-cart')}
                    className="text-gray-700 flex items-center gap-2 p-2 cursor-pointer select-none hover:text-gray-500"
                  >
                    <FaEdit /> Edit order
                  </h2>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}
      </div>
    </div>
  );
};
