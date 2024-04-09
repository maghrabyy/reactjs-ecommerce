import { Button } from "./ui/button"
import fenderElectricGuitar from '../assets/instruments/fender-guitar.png';
import fenderBassGuitar from '../assets/instruments/fender-bass-guitar.png';
import yamahaDrums from '../assets/instruments/yamaha-drums.png'
import violin from '../assets/instruments/violin.png';

import headerBg1 from '../assets/headerbg/music-store.jpg';
import headerBg2 from '../assets/headerbg/music-store2.jpg';
import headerBg3 from '../assets/headerbg/music-store3.jpg';
import headerBg4 from '../assets/headerbg/music-store4.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

export const Header = ()=>{
    type slideType = {
        headerBgURL:string,
        headerDesc:string,
        instrumentImg:string,
        rotateInstrumentImg:boolean,
        instrumentImgWidth?:number,
        section:string
    }
    const slides:slideType[] = [
        {
            headerBgURL: headerBg2,
            headerDesc:"Electric guitars aren't just instruments, they're voices. Find yours and let it scream.",
            instrumentImg:fenderElectricGuitar,
            rotateInstrumentImg:true,
            instrumentImgWidth:170,
            section:'Electric Guitars'
        },
        {
            headerBgURL: headerBg1,
            headerDesc:"A great bassist is the foundation of a rock band. They're the bedrock that allows the melodies and rhythms to soar.",
            instrumentImg:fenderBassGuitar,
            rotateInstrumentImg:true,
            instrumentImgWidth:100,
            section:'Bass Guitars'
        },
        {
            headerBgURL: headerBg3,
            headerDesc:"A drummer isn't just keeping time, they're leading the band. They set the pace and guide the energy of the music.",
            instrumentImg:yamahaDrums,
            rotateInstrumentImg:false,
            instrumentImgWidth:330,
            section:'Drums'
        },
        {
            headerBgURL: headerBg4,
            headerDesc:"A single note on the violin can speak more powerfully than a thousand words.",
            instrumentImg:violin,
            rotateInstrumentImg:false,
            section:'Violins'
        },
    ]
    return <div className="header md:mt-[96px] mt-[80px]">
    <Swiper
        className="md:h-[430px] h-[calc(100vh-56px)]"
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay,Pagination]}
        loop
        autoplay={{
            disableOnInteraction:false,
            delay:5000,
            pauseOnMouseEnter:true
        }
        }
        pagination={{
            clickable: true,
          }}>
        {slides.map((slide,index)=>{
            return <SwiperSlide key={index} style={{backgroundImage: `url(${slide.headerBgURL})`}} className="bg-cover bg-center">
            <div className="slide-content section h-full overlay flex flex-col md:flex-row items-center justify-between">
                <div className="slide-description flex flex-col gap-4 justify-center h-full md:order-first order-last">
                    <h1 className="header-title font-orbitron">Maghh Store.</h1>
                    <p className="header-subtitle">{slide.headerDesc}</p>
                    <div className="buttons flex gap-2">
                        <Button>Shop now</Button>
                        <Button>View {slide.section}</Button>
                    </div>
                </div>
                <div className={`slide-img md:px-10`}>
                    <img src={slide.instrumentImg} className={`${slide.rotateInstrumentImg? 'rotate-45' : null}`} width={slide.instrumentImgWidth?? 200} alt="fender stratocaster electric guitar" />
                </div>
            </div>
            </SwiperSlide>
        })}

    </Swiper>
</div>
}