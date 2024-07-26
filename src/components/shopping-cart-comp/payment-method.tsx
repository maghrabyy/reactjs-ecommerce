import { FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { usePendingOrderInfo } from '@/store/slices/pendingOrderSlice';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { addOrder } from '@/store/slices/orderSlice';
import { emptyShoppingCart } from '@/store/slices/shoppingCartSlice';
import { useShoppingCartItems } from '@/store/slices/shoppingCartSlice';
import { resetOrderInfo } from '@/store/slices/pendingOrderSlice';
import { useDispatch } from 'react-redux';

type paymentMethodForm = {
  paymentMethod: string;
};

export const PaymentMethod = () => {
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const { cstInfo, shippingDetails, amountDetail } = usePendingOrderInfo();
  const shoppingCartItems = useShoppingCartItems();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<paymentMethodForm>();

  const paymentMethodSubmitHandler = (inputData: paymentMethodForm) => {
    if (inputData.paymentMethod === 'cash') {
      setOpenConfirmDialog(true);
    }
  };

  const confirmOrderHandler = () => {
    const orderId = 'ORD' + crypto.randomUUID();
    dispatch(emptyShoppingCart());
    dispatch(resetOrderInfo());
    dispatch(
      addOrder({
        orderId,
        orderItems: shoppingCartItems.map((cartItem) => ({
          item: cartItem.item,
          itemQuantity: cartItem.itemQuantity,
          itemSubtotal: cartItem.totalPrice(),
        })),
        shippingFees: amountDetail!.shippingFees,
        totalOrderAmount: amountDetail!.total,
        paymentMethod: watch('paymentMethod'),
        cstInfo: cstInfo!,
        shippingDetails: shippingDetails!,
        orderStatus: 'pending',
      }),
    );
    navigate('/');
  };
  return (
    <div className="payment-method space-y-4">
      <div className="cst-info">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg">Your Info</h2>
          <p
            onClick={() => navigate('/shopping-cart/shipping-details')}
            className="flex justify-end items-center gap-2 select-none cursor-pointer hover:text-gray-700"
          >
            <FaEdit /> Edit
          </p>
        </div>
        <div className="panel p-2">
          <h2>
            {cstInfo?.firstName} {cstInfo?.lastName}
          </h2>
          <h2>{cstInfo?.email}</h2>
          <h3>[+20] {cstInfo?.phoneNum}</h3>
          <h2>
            {shippingDetails?.address1}, {shippingDetails?.city}
          </h2>
          {shippingDetails?.address2 && <h2>{shippingDetails?.address2}</h2>}
          <h2>
            Building {shippingDetails?.buildingNum}, Floor{' '}
            {shippingDetails?.floorNum}, Apt {shippingDetails?.aptNum}
          </h2>
        </div>
      </div>
      <div className="customer-info flex flex-col gap-2">
        <h2 className="font-semibold text-lg">Payment Method</h2>
        {errors.paymentMethod && (
          <h2 className="text-red-600">{errors.paymentMethod.message}</h2>
        )}
        {(watch('paymentMethod') === 'credit-debit' ||
          watch('paymentMethod') === 'paypal' ||
          watch('paymentMethod') === 'valu') && (
          <h2 className="bg-red-400 text-center py-2 text-gray-100">
            Payment method is not available yet.
          </h2>
        )}
        <form onSubmit={handleSubmit(paymentMethodSubmitHandler)}>
          <div className="credit-debit-payment flex gap-2">
            <input
              value="credit-debit"
              type="radio"
              {...register('paymentMethod', {
                required: 'You have to select a payment method first.',
              })}
            />
            <label>Credit/Debit Card</label>
          </div>
          <div className="paypal-payment flex gap-2">
            <input
              type="radio"
              value="paypal"
              {...register('paymentMethod', {
                required: 'You have to select a payment method first.',
              })}
            />
            <label>Paypal</label>
          </div>
          <div className="valu-payment flex gap-2">
            <input
              type="radio"
              value="valu"
              {...register('paymentMethod', {
                required: 'You have to select a payment method first.',
              })}
            />
            <label>Valu</label>
          </div>
          <div className="cash-payment flex gap-2">
            <input
              type="radio"
              value="cash"
              {...register('paymentMethod', {
                required: 'You have to select a payment method first.',
              })}
            />
            <label>Cash on Delivery</label>
          </div>
        </form>
      </div>
      <AlertDialog open={openConfirmDialog} onOpenChange={setOpenConfirmDialog}>
        <AlertDialogTrigger
          className="btn-main"
          onClick={handleSubmit(paymentMethodSubmitHandler)}
        >
          Place Order
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Place Order</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to place order of total amount{' '}
              <span className="font-bold">
                {amountDetail?.total.toLocaleString()} EGP
              </span>
              ?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmOrderHandler}>
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
