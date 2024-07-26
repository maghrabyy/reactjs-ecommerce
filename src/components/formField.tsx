import { Input } from './ui/input';
import { FieldError, UseFormRegister } from 'react-hook-form';

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

type FormFieldType = {
  name: keyof shippingDetailsForm;
  label: string;
  placeholder: string;
  register: UseFormRegister<shippingDetailsForm>;
  prefix?: string;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  value?: string;
  error?: FieldError;
};

export const FormField = ({
  label,
  name,
  placeholder,
  type = 'text',
  register,
  prefix,
  required,
  minLength,
  maxLength,
  pattern,
  value,
  error,
}: FormFieldType) => {
  const errorMessage = (errorType: string) => {
    if (errorType === 'required') return 'This field is required.';
    if (errorType === 'minLength')
      return `Must be at least ${minLength} characters long.`;
    if (errorType === 'maxLength')
      return `Must be no more than ${maxLength} characters long.`;
    if (errorType === 'pattern' && type === 'tel')
      return 'Invalid phone number format. For example, 010-1234567';
    if (errorType === 'pattern' && type === 'email')
      return 'Invalid email format.';
    if (errorType === 'pattern') return 'Invalid input.';

    return '';
  };
  return (
    <>
      <label>
        {label} {required && '*'}
      </label>
      <Input
        className={`${error && 'border-red-500'}`}
        {...register(name, {
          required,
          minLength,
          maxLength,
          pattern,
          value,
        })}
        placeholder={placeholder}
        type={type}
        prefix={prefix}
      />
      {error && (
        <h2 className="text-red-600 py-1">{errorMessage(error.type)}</h2>
      )}
    </>
  );
};
