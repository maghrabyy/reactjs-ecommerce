import yamahaLogo from '../assets/brandslogos/yamaha.png';
import fenderLogo from '../assets/brandslogos/fender.png';
import ibanezLogo from '../assets/brandslogos/ibanez.png';
import gibsonLogo from '../assets/brandslogos/gibson.png';
import cortLogo from '../assets/brandslogos/cort.png';
import marshalLogo from '../assets/brandslogos/marshal.png';
import casioLogo from '../assets/brandslogos/casio.png';
import orangeLogo from '../assets/brandslogos/orange.png';

import Marquee from 'react-fast-marquee';

export const BrandsSwiper = ()=>{
    return <Marquee direction='right' className="brands py-4">
        <img src={yamahaLogo} className='w-36 mx-5' alt="yamaha brand logo" />
        <img src={fenderLogo} className='w-36 mx-5' alt="fender brand logo" />
        <img src={ibanezLogo} className='w-36 mx-5' alt="ibanez brand logo" />
        <img src={gibsonLogo} className='w-36 mx-5 ' alt="gibson brand logo" />
        <img src={cortLogo} className='w-36 mx-5 ' alt="cort brand logo" />
        <img src={marshalLogo} className='w-36 mx-5' alt="marhsal brand logo" />
        <img src={casioLogo} className='w-36 mx-5' alt="casio brand logo" />
        <img src={orangeLogo} className='w-36 mx-5' alt="orange amps brand logo" />
      </Marquee>
}