import fenderBass from '../../assets/instruments/fender-bass-guitar.png';
import gibsonGuitar from '../../assets/instruments/gibson-guitar.png';
import marshalAmp from '../../assets/instruments/marshal-amp2.png';
import yamahaDrums from '../../assets/instruments/yamaha-drums.png';

import { HomeSection } from '../home-section';
import { ProdType } from '@/types/product-type';

export const HotOffersItems = ()=>{
    const hotOffersProds : ProdType[] = [
        {
            prodId:'1bg',
            prodImg:fenderBass,
            availability:true,
            prodBrand:'Fender',
            prodTitle:'Bass',
            prodDesc:'Fender bass guitar.',
            prodRate:164,
            prodStars:4,
            prodPrice:12999,
            offer:0.5,
            prodDate:new Date('May 13, 2023')
        },
        {
            prodId:'1g',
            prodImg:gibsonGuitar,
            availability:true,
            prodBrand:'Gibson',
            prodTitle:'Guitar',
            prodDesc:'Gibson red electric guitar.',
            prodRate:129,
            prodStars:4,
            prodPrice:24999,
            offer:0.25,
            prodDate:new Date('June 20, 2023')
        },
        {
            prodId:'1m',
            prodImg:marshalAmp,
            availability:true,
            prodBrand:'Marshal',
            prodTitle:'Amplifier',
            prodDesc:'Marshal v39 Amplifier.',
            prodRate:85,
            prodStars:4,
            prodPrice:32999,
            offer:0.25,
            prodDate: new Date('July 2, 2023')
        },
        {
            prodId:'1d',
            prodImg:yamahaDrums,
            availability:true,
            prodBrand:'Yamaha',
            prodTitle:'Drums',
            prodDesc:'Yamaha full drumskit.',
            prodRate:19,
            prodStars:3,
            prodPrice:18999,
            offer:0.25,
            prodDate: new Date('January 17, 2024')
        }
    ]
    return <HomeSection sectionTitle='Hot Offers' prodList={hotOffersProds} sortBy='prodPrice' />
}