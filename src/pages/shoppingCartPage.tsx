import { useShoppingCartItems } from "@/store/slices/shoppingCartSlice"
import { CartItem } from "@/components/shopping-cart-comp/cart-item";
import { OrderSummary } from "@/components/shopping-cart-comp/order-summary";
import { EmptyShoppingCart } from "@/components/shopping-cart-comp/empty-cart";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { useOutlet } from "react-router-dom";

export const ShoppingCartPage = ()=>{
    const SHIPPING_FEES = 0;
    const shoppingCartItems = useShoppingCartItems();
    const ordersAmount = shoppingCartItems.map(cartItem=>cartItem.totalPrice()).reduce((a,b)=>a+b,0);
    const outlet = useOutlet();
    return shoppingCartItems.length > 0? <div className="shopping-cart-page min-h-screen section py-8 grid md:grid-cols-3 grid-cols-1 gap-4">
        <div className="shopping-cart-items space-y-4 col-span-2">
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbPage className="font-bold">Shopping Cart</BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Shipping</BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Payment</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>

        {outlet || shoppingCartItems.map(cartItem =>{
                return <CartItem key={cartItem.itemId} cartItem={cartItem} />}).reverse()}
        </div>
        <OrderSummary ordersAmount={ordersAmount} shippingFees={SHIPPING_FEES} />
    </div> 
    :
    <EmptyShoppingCart/>
}

