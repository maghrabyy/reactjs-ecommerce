import { useShoppingCartItems } from "@/store/slices/shoppingCartSlice"
import { CartList } from "@/components/shopping-cart-comp/cart-list";
import { OrderSummary } from "@/components/shopping-cart-comp/order-summary";
import { EmptyShoppingCart } from "@/components/shopping-cart-comp/empty-cart";
import { useOutlet } from "react-router-dom";
import { ShoppingBreadCrumb } from "@/components/shopping-breadcrumb";
import { useLocation } from "react-router-dom";

export const ShoppingCartPage = ()=>{
    const SHIPPING_FEES = 0;
    const location = useLocation().pathname;
    const shoppingCartItems = useShoppingCartItems();
    const ordersAmount = shoppingCartItems.map(cartItem=>cartItem.totalPrice()).reduce((a,b)=>a+b,0);
    const outlet = useOutlet();
    return shoppingCartItems.length > 0? <div className="shopping-cart-page min-h-screen section py-8 grid md:grid-cols-3 grid-cols-1 md:gap-4 md:space-y-0 space-y-4">
        <div className="shopping-process col-span-2">
            <ShoppingBreadCrumb currentPhase={location === '/shopping-cart'? 'shoppingCart' : location === '/shipping-details'? 'shippingDetails' : 'paymentMethod'}/>
            {outlet || <CartList/>}
        </div>
        <OrderSummary ordersAmount={ordersAmount} shippingFees={SHIPPING_FEES} />
    </div> 
    :
    <EmptyShoppingCart/>
}

