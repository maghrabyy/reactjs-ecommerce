import yamahaLogo from '../assets/brandslogos/yamaha.png';
import fenderLogo from '../assets/brandslogos/fender.png';
import ibanezLogo from '../assets/brandslogos/ibanez.png';
import gibsonLogo from '../assets/brandslogos/gibson.png';
import marshalLogo from '../assets/brandslogos/marshal.png';
import casioLogo from '../assets/brandslogos/casio.png';
import orangeLogo from '../assets/brandslogos/orange.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

export const BrandsSwiper = ()=>{
    return <Swiper
    className='brands md:px-10 px-5 py-4'
      spaceBetween={30}
      slidesPerView={3}
      breakpoints={{
        640: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 50
      },
    }}
      modules={[Autoplay]}
      loop
      autoplay={{
          disableOnInteraction:false,
          delay:2000,
          pauseOnMouseEnter:true
      }}>
      <SwiperSlide className='self-center'><img src={yamahaLogo} alt="yamaha brand logo" /></SwiperSlide>
      <SwiperSlide className='self-center'><img src={fenderLogo} alt="fender brand logo" /></SwiperSlide>
      <SwiperSlide className='self-center'><img src={ibanezLogo} alt="ibanez brand logo" /></SwiperSlide>
      <SwiperSlide className='self-center'><img src={gibsonLogo} alt="gibson brand logo" /></SwiperSlide>
      <SwiperSlide className='self-center'><img src={marshalLogo} alt="marhsal brand logo" /></SwiperSlide>
      <SwiperSlide className='self-center'><img src={casioLogo} alt="casio brand logo" /></SwiperSlide>
      <SwiperSlide className='self-center'><img src={orangeLogo} alt="orange amps brand logo" /></SwiperSlide>
    </Swiper>
}