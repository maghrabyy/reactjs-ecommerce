import products from '@/data/products.json';
import { HomeSection } from '../home-section';

export const NewArrivalItems = ()=>{
    const newArrivalProds = products.filter(product=>new Date(product.prodDate).getTime()>=new Date("28 March 2024").getTime()).slice(0,4)
    return <HomeSection sectionTitle='New Arrival' prodList={newArrivalProds} sortBy='prodDate' />
}