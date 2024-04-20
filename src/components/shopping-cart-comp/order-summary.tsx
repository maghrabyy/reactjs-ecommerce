import { SquareArrowOutUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import visaLogo from '@/assets/payment/visa.png'
import mastercardLogo from '@/assets/payment/mastercard.png'
import paypalLogo from '@/assets/payment/paypal.png'
import valuLogo from '@/assets/payment/valu.png'

type OrderSummaryType = {
    ordersAmount:number,
    shippingFees:number
}

export const OrderSummary = ({ordersAmount,shippingFees}:OrderSummaryType) =>{
    const totalOrdersAmount = ordersAmount + shippingFees;
    return <div className="order-summary px-4 panel self-baseline md:sticky top-28">
    <h2 className="font-bold text-center py-4">Order Summary</h2>
    <div className="order-price space-y-2 border-b border-slate-300 pb-4">
        <div className="order-section flex justify-between">
            <h3>Order Amount</h3>
            <h3 className="font-bold">{ordersAmount.toLocaleString()} EGP</h3>
        </div>
        <div className="order-section flex justify-between">
            <h3>Shipping Fees</h3>
            <h3 className="font-bold">{shippingFees as number === 0? 'Free shipping' : shippingFees + ' EGP'}</h3>
        </div>
    </div>
    <div className="total-amount">
        <h2 className="font-bold text-center py-4">Total Amount</h2>
        <h3 className="font-bold text-4xl text-center">{totalOrdersAmount.toLocaleString()} EGP</h3>
    </div>
    <div className="order-action flex flex-col items-center gap-4 py-4">
        <h3>Accepted payments</h3>
        <div className="accepted-payments imgs grid grid-cols-4 items-center gap-2">
            <img src={visaLogo} alt="visa payment logo" />
            <img src={mastercardLogo} alt="mastercard payment logo" />
            <img src={paypalLogo} alt="paypal payment logo" />
            <img src={valuLogo} alt="valu payment logo" />
        </div>
        <Button className="self-stretch flex gap-2">Proceed to checkout <SquareArrowOutUpRight/></Button>
    </div>
</div>
}

