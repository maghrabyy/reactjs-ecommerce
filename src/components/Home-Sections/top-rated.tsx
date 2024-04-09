import stratocasterFenderGuitar from '../../assets/instruments/fender-strat-guitar.png';
import marrshalAmp from '../../assets/instruments/marshal-amp.png';
import ibanezElectricGuitar from '../../assets/instruments/ibanez-electric-guitar.png';
import yamahaKeyboard from '../../assets/instruments/yamaha-kayboard.png';

import { HomeSection,prodType } from '../home-section';

export const TopRatedItems = ()=>{
    const topRatedProds : prodType[] = [
        {
            prodId:'1g',
            prodImg:stratocasterFenderGuitar,
            availability:true,
            prodTitle:'Fender Stratocaster',
            prodDesc:'Fender stratocaster blue electric guitar.',
            prodRate:3432,
            prodStars:4,
            prodPrice:10399,
            prodDate:new Date('March 24, 2024')
        },
        {
            prodId:'1m',
            prodImg:marrshalAmp,
            availability:true,
            prodTitle:'Marshal Amplifier',
            prodDesc:'Marshal Amplifier.',
            prodRate:2501,
            prodStars:4,
            prodPrice:8399,
            prodDate:new Date('February 14, 2024')
        },
        {
            prodId:'2g',
            prodImg:ibanezElectricGuitar,
            availability:true,
            prodTitle:'Ibanez Guitar',
            prodDesc:'Ibanez stratocaster black electric guitar.',
            prodRate:2432,
            prodStars:4,
            prodPrice:18599,
            prodDate: new Date('October 19, 2023')
        },
        {
            prodId:'1k',
            prodImg:yamahaKeyboard,
            availability:true,
            prodTitle:'Yamaha Keyboard',
            prodDesc:'Yamaha digital keyboard.',
            prodRate:1250,
            prodStars:4,
            prodPrice:15999,
            prodDate: new Date('November 23, 2023')
        }
    ]
    return <HomeSection sectionTitle='Top Rated' prodList={topRatedProds} sortBy='prodRate' />
}