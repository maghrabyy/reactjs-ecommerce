import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  setCstInfo,
  setShippingDetail,
} from '@/store/slices/pendingOrderSlice';
import { usePendingOrderInfo } from '@/store/slices/pendingOrderSlice';
import { FormField } from '../formField';

export const ShippingDetails = () => {
  type shippingDetailsForm = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNum: string;
    city: string;
    address1: string;
    address2: string;
    buildingNum: string;
    floorNum: string;
    aptNum: string;
  };
  const { cstInfo, shippingDetails } = usePendingOrderInfo();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<shippingDetailsForm>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (inputData: shippingDetailsForm) => {
    navigate('/shopping-cart/payment-methods');
    dispatch(
      setCstInfo({
        cstInfo: {
          firstName: inputData.firstName,
          lastName: inputData.lastName,
          email: inputData.email,
          phoneNum: inputData.phoneNum,
        },
      }),
    );
    dispatch(
      setShippingDetail({
        shippingDetails: {
          city: inputData.city,
          address1: inputData.address1,
          address2: inputData.address2,
          buildingNum: inputData.buildingNum,
          floorNum: inputData.floorNum,
          aptNum: inputData.aptNum,
        },
      }),
    );
  };
  return (
    <div className="shipping-details space-y-4">
      <div className="shipping-section space-y-8">
        <div className="customer-info flex flex-col gap-2">
          <h2 className="font-semibold text-lg">Your Info</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormField
              register={register}
              label="First Name"
              placeholder="Enter your first name."
              name="firstName"
              required
              value={cstInfo?.firstName}
              error={errors.firstName}
            />
            <FormField
              label="Last Name"
              placeholder="Enter your last name."
              register={register}
              name="lastName"
              required
              value={cstInfo?.lastName}
              error={errors.lastName}
            />
            <FormField
              label="Email Address"
              placeholder="Enter your email address."
              register={register}
              name="email"
              pattern={RegExp(
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              )}
              type="email"
              required
              value={cstInfo?.email}
              error={errors.email}
            />
            <FormField
              label="Phone Number"
              placeholder="Enter your phone number."
              register={register}
              name="phoneNum"
              value={cstInfo?.phoneNum}
              required
              pattern={RegExp(/^(010|011|012|015)\d{8}$/)}
              type="tel"
              prefix="+20"
              error={errors.phoneNum}
            />
          </form>
        </div>
        <div className="shipping-details flex flex-col gap-2">
          <h2 className="font-semibold text-lg">Your shipping info</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormField
              label="City"
              placeholder="Enter your resident city."
              register={register}
              name="city"
              required
              value={shippingDetails?.city}
              error={errors.city}
            />
            <FormField
              label="Address 1"
              placeholder="Enter your address."
              register={register}
              name="address1"
              required
              value={shippingDetails?.address1}
              error={errors.address1}
            />
            <FormField
              label="Address 2"
              placeholder="Enter your address."
              register={register}
              name="address2"
              value={shippingDetails?.address2}
            />
            <FormField
              label="Building Number"
              placeholder="Enter your building number."
              register={register}
              name="buildingNum"
              required
              value={shippingDetails?.buildingNum}
              error={errors.buildingNum}
            />
            <FormField
              label="Floor Number"
              placeholder="Enter your floor number."
              register={register}
              name="floorNum"
              required
              value={shippingDetails?.floorNum}
              error={errors.floorNum}
            />
            <FormField
              label="Apt Number"
              placeholder="Enter your apartment number."
              register={register}
              name="aptNum"
              required
              value={shippingDetails?.aptNum}
              error={errors.aptNum}
            />
          </form>
        </div>
      </div>
      <Button onClick={handleSubmit(onSubmit)}>Save & Continue</Button>
    </div>
  );
};
