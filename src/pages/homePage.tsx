import { Header } from "@/components/header"
import { BrandsSwiper } from "@/components/brandsSwiper"
import { TopRatedItems } from "@/components/Home-Sections/top-rated"
import { HotOffersItems } from "@/components/Home-Sections/hot-offers"
import { NewArrivalItems } from "@/components/Home-Sections/new-arrival"

export const HomePage = ()=>{
    return <div className="home-page">
        <Header/>
        <BrandsSwiper/>
        <TopRatedItems/>
        <HotOffersItems/>
        <NewArrivalItems/>
    </div>
}