import { HomeSection } from '../home-section';
import products from '@/data/products.json';
export const TopRatedItems = ()=>{
    const topRatedProds = products.filter(prod=>prod.prodRate>999).slice(0,4)
    return <HomeSection sectionTitle='Top Rated' prodList={topRatedProds} sortBy='prodRate' />
}