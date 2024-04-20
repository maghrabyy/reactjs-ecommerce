import { useDispatch } from "react-redux"
import { decrementItemQuantity, incrementItemQuantity, removeItemFromCart } from "@/store/slices/shoppingCartSlice"
import { ShoppingCartType } from "@/types/shopping-cart-type"
import { FaMinus } from "react-icons/fa"
import { FaPlus } from "react-icons/fa"

type CartItemType = {
    cartItem: ShoppingCartType
}
export const CartItem = ({cartItem}:CartItemType)=>{
    const dispatch = useDispatch();
    const incrementItemHandler = (prodItem:ShoppingCartType) =>{
        dispatch(incrementItemQuantity(prodItem))
    }
    const decrementItemHandler = (prodItem:ShoppingCartType)=>{
        if(prodItem.itemQuantity > 1){
            dispatch(decrementItemQuantity(prodItem))
        }else{
            dispatch(removeItemFromCart(prodItem))
        }
    }
    const prodDiscount  = cartItem.item.prodPrice*cartItem.item.offer!;
    const prodPrice = cartItem.item.offer? cartItem.item.prodPrice-prodDiscount : cartItem.item.prodPrice;
    const prodTotalPrice = prodPrice * cartItem.itemQuantity;
    return  <div className="cart-item grid grid-cols-5 gap-4">
    <div className="prouct-img p-5 panel flex justify-center h-[200px] col-span-2">
        <img src={cartItem.item.prodImg} className="object-contain" alt="fender guitar" />
    </div>
    <div className="cart-details col-span-3 flex flex-col gap-2">
        <div className="product-titleNproduct-price flex justify-between">
            <h1 className="prod-title font-bold">{cartItem.item.prodBrand.brandTitle} {cartItem.item.prodTitle}</h1>
            <h3>{prodPrice.toLocaleString()} EGP</h3>
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

