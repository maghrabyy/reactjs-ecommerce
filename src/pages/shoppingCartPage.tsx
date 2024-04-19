import { FaMinus } from "react-icons/fa"
import { FaPlus } from "react-icons/fa"
import { SquareArrowOutUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import visaLogo from '@/assets/payment/visa.png'
import mastercardLogo from '@/assets/payment/mastercard.png'
import paypalLogo from '@/assets/payment/paypal.png'
import valuLogo from '@/assets/payment/valu.png'
import { useShoppingCartItems } from "@/store/slices/shoppingCartSlice"
import { useDispatch } from "react-redux"
import { decrementItemQuantity, incrementItemQuantity, removeItemFromCart } from "@/store/slices/shoppingCartSlice"
import { ShoppingCartType } from "@/types/shopping-cart-type"
import emptyCartImg from '@/assets/empty-cart.png';
import { useNavigate } from "react-router-dom"

export const ShoppingCartPage = ()=>{
    const navigate = useNavigate();
    const SHIPPING_FEES = 0;
    const shoppingCartItems = useShoppingCartItems();
    const ordersAmount = shoppingCartItems.map(cartItem=>cartItem.totalPrice()).reduce((a,b)=>a+b,0);
    return shoppingCartItems.length > 0? <div className="shopping-cart-page min-h-screen section py-8 grid md:grid-cols-3 grid-cols-1 gap-4">
        <div className="shopping-cart-items space-y-4 col-span-2">
            {shoppingCartItems.map(cartItem =>{
                return <CartItem key={cartItem.itemId} cartItem={cartItem} />
            }).reverse()}
        </div>
        <OrderSummary ordersAmount={ordersAmount} shippingFees={SHIPPING_FEES} />
    </div> 
    :
    <div className="empty-cart section grid md:grid-cols-2  items-center justify-center">
        <div className="empty-cart-msg flex flex-col md:items-start items-stretch  gap-4 md:order-first order-last">
            <h2 className="text-2xl font-semibold text-slate-700 text-center">Your shoppping cart is empty.</h2>
            <Button onClick={()=>navigate('/')}>Continue shopping</Button>
        </div>
        <img src={emptyCartImg} alt="empty shopping cart" />
    </div>
}

type CartItemType = {
    cartItem: ShoppingCartType
}
const CartItem = ({cartItem}:CartItemType)=>{
    const dispatch = useDispatch();
    const incrementItemHandler = (prodItem:ShoppingCartType) =>{
        dispatch(incrementItemQuantity(prodItem))
    }
    console.log(cartItem.itemQuantity)
    const decrementItemHandler = (prodItem:ShoppingCartType)=>{
        if(prodItem.itemQuantity > 1){
            dispatch(decrementItemQuantity(prodItem))
        }else{
            dispatch(removeItemFromCart(prodItem))
        }
    }
    const prodTotalPrice = cartItem.item.prodPrice * cartItem.itemQuantity;
    return  <div className="cart-item grid grid-cols-5 gap-4">
    <div className="prouct-img p-5 panel flex justify-center h-[200px] col-span-2">
        <img src={cartItem.item.prodImg} className="object-contain" alt="fender guitar" />
    </div>
    <div className="cart-details col-span-3 flex flex-col gap-2">
        <div className="product-titleNproduct-price flex justify-between">
            <h1 className="prod-title font-bold">{cartItem.item.prodBrand.brandTitle} {cartItem.item.prodTitle}</h1>
            <h3>{cartItem.item.prodPrice.toLocaleString()} EGP</h3>
        </div>
        <p className="product-desc">{cartItem.item.prodDesc}</p>
        <div className="product-colorNQuantity flex items-center justify-between">
            <h2 className="product-color">Color: <span className="font-semibold">Blue</span></h2>
            <div className="price-qty flex flex-col items-center gap-2">
                <h3 className="product-total-price font-bold">{prodTotalPrice.toLocaleString()} EGP</h3>
                <div className="product-quantity flex gap-4">
                    <div onClick={()=>decrementItemHandler(cartItem)} className="dec shadow-sm rounded-md bg-slate-100 text-slate-800 text-xs p-2 cursor-pointer hover:bg-slate-200"><FaMinus/></div>
                    <div className="qty">{cartItem.itemQuantity}</div>
                    <div onClick={()=>incrementItemHandler(cartItem)} className="inc shadow-sm rounded-md bg-slate-100 text-slate-800 text-xs p-2 cursor-pointer hover:bg-slate-200"><FaPlus/></div>
                </div>
            </div>
        </div>
    </div>
</div>
}

type OrderSummaryType = {
    ordersAmount:number,
    shippingFees:number
}
const OrderSummary = ({ordersAmount,shippingFees}:OrderSummaryType) =>{
    const totalOrdersAmount = ordersAmount + shippingFees;
    return <div className="order-summary px-4 panel self-baseline sticky top-28">
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