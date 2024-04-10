import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { ShoppingCart } from 'lucide-react';

type ProductCardType = {
    prodImg:string,
    prodAvailability:boolean,
    prodTitle:string,
    prodDesc:string,
    prodRate:number,
    prodStars:number,
    prodPrice:number,
    prodOffer?:number
}
export const ProductCard = ({prodImg,prodAvailability,prodTitle,prodDesc,prodRate,prodStars,prodPrice,prodOffer}:ProductCardType)=>{
    const totalStarNum = 5;
    return <Card className="relative flex flex-col justify-between">
        <Badge variant={prodAvailability? 'success' : 'destructive'} className="absolute top-2 left-2">{prodAvailability? "In stock" : "Out stock"}</Badge>
        <div className="add-to-wishlist absolute top-2 right-2 cursor-pointer hover:text-red-600">
            <FaRegHeart />
        </div>
        <CardHeader>
        <div className="card-img flex justify-center py-2 h-[240px] relative">
            <img src={prodImg} className="object-contain hover:scale-105 duration-300 ease-in cursor-pointer" alt="Fender stratocaster blue electric guitar" />
            {prodOffer && <Badge variant="destructive" className="absolute bottom-0 right-2">
                {prodOffer*100}%
            </Badge>}
        </div>
        <CardTitle className="cursor-pointer hover:text-slate-700 select-none md:text-xl sm:text-lg text-base truncate">{prodTitle}</CardTitle>
        <CardDescription className=" truncate">{prodDesc}</CardDescription>
        <CardDescription className="flex items-center gap-2">
            {Array.from({length:prodStars},(_,index)=><FaStar key={index}/>)}
            {Array.from({length:totalStarNum-prodStars},(_,index)=><FaRegStar key={index}/>)}
            ({prodRate.toLocaleString()})
        </CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col lg:flex-row gap-2 lg:items-center justify-between">
        <Button className="order-last lg:order-first"><ShoppingCart className="me-2"/> Add to cart</Button>
            {prodOffer? <div className="offer-price flex flex-col gap-1">
            <Badge variant="secondary" className="old-offer-price font-bold flex justify-center text-center">
                <del className="old-price">{prodPrice.toLocaleString()} EGP</del></Badge>
                <Badge variant="secondary" className="new-offer-price font-bold flex justify-center text-center">
                    {(prodPrice-prodPrice*prodOffer).toLocaleString("en", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    }) } EGP</Badge>
            </div> 
        : <Badge variant="secondary" className="no-offer-price font-bold flex justify-center text-center">
            {prodPrice.toLocaleString()} EGP
        </Badge>}
    </CardContent>
</Card>  
}