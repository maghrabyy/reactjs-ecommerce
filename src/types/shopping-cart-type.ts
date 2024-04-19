import { ProdType } from "./product-type"

export type ShoppingCartType = {
    itemId:string,
    item:ProdType,
    itemQuantity:number,
    totalPrice:()=>number,
}
