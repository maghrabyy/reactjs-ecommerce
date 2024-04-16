import { ProdType } from "./product-type"

export type ShoppingCartType = {
    item:ProdType,
    itemQuantity:number,
    totalPrice:()=>number,
}
