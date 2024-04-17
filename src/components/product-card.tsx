import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/store/slices/shoppingCartSlice";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { ShoppingCart } from 'lucide-react';
import { ProdType } from "@/types/product-type";
import { ShoppingCartType } from "@/types/shopping-cart-type";

type ProductCardType = {
    prod:ProdType
    twoColumnsStyle?:boolean
}
export const ProductCard = ({prod,twoColumnsStyle = false}:ProductCardType)=>{
    const totalStarNum = 5;
    const dispatch = useDispatch();
    const addToCartHandler = ()=>{
        const shoppingCartItem:ShoppingCartType = {
            item:prod,
            itemQuantity:1,
            totalPrice:function(){
                return this.item.prodPrice+this.itemQuantity
            }
        }
        dispatch(addItemToCart(shoppingCartItem))
    }
    return <Card className="relative flex flex-col justify-between">
        <Badge variant={prod.availability? 'success' : 'destructive'} className="absolute top-2 left-2">{prod.availability? "In stock" : "Out stock"}</Badge>
        <div className="add-to-wishlist absolute top-2 right-2 cursor-pointer hover:text-red-600">
            <FaRegHeart />
        </div>
        <CardHeader>
        <div className="card-img flex justify-center py-2 h-[240px] relative">
            <img src={prod.prodImg} className="object-contain hover:scale-105 duration-300 ease-in cursor-pointer" alt={prod.prodDesc} />
            {prod.offer && <Badge variant="destructive" className="absolute bottom-0 right-2">
                {prod.offer*100}%
            </Badge>}
        </div>
        <CardTitle className={`cursor-pointer hover:text-slate-700 select-none  ${twoColumnsStyle? 'md:text-2xl sm:text-xl text-base truncate' : 'text-2xl'}`}>
            {prod.prodBrand.brandTitle} {prod.prodTitle}
        </CardTitle>
        <CardDescription className=" truncate">{prod.prodDesc}</CardDescription>
        <CardDescription className="flex items-center gap-2">
            {Array.from({length:prod.prodStars},(_,index)=><FaStar key={index}/>)}
            {Array.from({length:totalStarNum-prod.prodStars},(_,index)=><FaRegStar key={index}/>)}
            ({prod.prodRate.toLocaleString()})
        </CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col lg:flex-row gap-2 lg:items-center justify-between">
        <Button onClick={addToCartHandler} className="order-last lg:order-first"><ShoppingCart className="me-2"/> Add to cart</Button>
            {prod.offer? <div className="offer-price flex flex-col gap-1">
            <Badge variant="secondary" className="old-offer-price font-bold flex justify-center text-center">
                <del className="old-price">{prod.prodPrice.toLocaleString()} EGP</del></Badge>
                <Badge variant="secondary" className="new-offer-price font-bold flex justify-center text-center">
                    {(prod.prodPrice-prod.prodPrice*prod.offer).toLocaleString("en", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    }) } EGP</Badge>
            </div> 
        : <Badge variant="secondary" className="no-offer-price font-bold flex justify-center text-center">
            {prod.prodPrice.toLocaleString()} EGP
        </Badge>}
    </CardContent>
</Card>  
}