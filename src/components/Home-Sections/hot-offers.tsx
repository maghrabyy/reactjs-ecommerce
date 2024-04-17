import { HomeSection } from '../home-section';
import products from '@/data/products.json';

export const HotOffersItems = ()=>{
    const hotOffersProds = products.filter(product=>product.offer).slice(0,4)
    return <HomeSection sectionTitle='Hot Offers' prodList={hotOffersProds} sortBy='prodPrice' />
}