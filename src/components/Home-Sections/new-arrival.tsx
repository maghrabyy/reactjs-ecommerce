import stratocasterFender from '../../assets/instruments/stratocaster-guitar.png';
import ibanezGuitar from '../../assets/instruments/ibanez-acoustic-guitar.png';
import casioKeyboard from '../../assets/instruments/casio-keyboard.png';
import espBass from '../../assets/instruments/esp-basss-guitar.png';

import { HomeSection,prodType } from '../home-section';

export const NewArrivalItems = ()=>{
    const newArrivalProds : prodType[] = [
        {
            prodId:'1g',
            prodImg:stratocasterFender,
            availability:true,
            prodTitle:'Fender Stratocaster',
            prodDesc:'Fender stratocaster brown electric guitar.',
            prodRate:9,
            prodStars:4,
            prodPrice:10399,
            prodDate:new Date('March 29, 2024')
        },
        {
            prodId:'2g',
            prodImg:ibanezGuitar,
            availability:true,
            prodTitle:'Ibanez Guitar',
            prodDesc:'Ibanez acoustic guitar.',
            prodRate:2,
            prodStars:5,
            prodPrice:6999,
            prodDate:new Date('April 6, 2024')
        },
        {
            prodId:'1k',
            prodImg:casioKeyboard,
            availability:true,
            prodTitle:'Casio Keyboard',
            prodDesc:'Casio digital keyboard.',
            prodRate:0,
            prodStars:0,
            prodPrice:12599,
            prodDate: new Date('April 1, 2024')
        },
        {
            prodId:'1bg',
            prodImg:espBass,
            availability:true,
            prodTitle:'ESP Bass',
            prodDesc:'ESP black bass guitar.',
            prodRate:0,
            prodStars:0,
            prodPrice:10999,
            prodDate: new Date('April 7, 2024')
        }
    ]
    return <HomeSection sectionTitle='New Arrival' prodList={newArrivalProds} sortBy='prodDate' />
}