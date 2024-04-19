import { Header } from "@/components/home-page-comp/header"
import { BrandsSwiper } from "@/components/home-page-comp/brandsSwiper"
import { TopRatedItems } from "@/components/home-page-comp/Home-Sections/top-rated"
import { HotOffersItems } from "@/components/home-page-comp/Home-Sections/hot-offers"
import { NewArrivalItems } from "@/components/home-page-comp/Home-Sections/new-arrival"
import { CardsGrid } from "@/components/home-page-comp/card-grids";
import { SubscribeToNewsletter } from "@/components/home-page-comp/subscribeToNewsletter"

export const HomePage = ()=>{
    return <div className="home-page">
        <Header/>
        <BrandsSwiper/>   
        <CardsGrid/>
        <TopRatedItems/>
        <HotOffersItems/>
        <NewArrivalItems/>
        <SubscribeToNewsletter/>
    </div>
}