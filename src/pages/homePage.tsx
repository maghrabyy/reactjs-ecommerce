import { Header } from "@/components/header"
import { BrandsSwiper } from "@/components/brandsSwiper"
import { TopRatedItems } from "@/components/Home-Sections/top-rated"
import { HotOffersItems } from "@/components/Home-Sections/hot-offers"
import { NewArrivalItems } from "@/components/Home-Sections/new-arrival"
import { CardsGrid } from "@/components/card-grids";
export const HomePage = ()=>{
    return <div className="home-page">
        <Header/>
        <BrandsSwiper/>   
        <CardsGrid/>
        <TopRatedItems/>
        <HotOffersItems/>
        <NewArrivalItems/>
    </div>
}