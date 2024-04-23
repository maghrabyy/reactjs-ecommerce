import { CartItem } from "./cart-item"
import { useShoppingCartItems } from "@/store/slices/shoppingCartSlice"

export const CartList = ()=>{
    const shoppingCartItems = useShoppingCartItems();
    return  <div className="shopping-cart-items space-y-4">
    {shoppingCartItems.map(cartItem =>{
            return <CartItem key={cartItem.itemId} cartItem={cartItem} />}).reverse()}
    </div>
}