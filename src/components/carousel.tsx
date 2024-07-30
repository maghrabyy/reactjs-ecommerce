import { Swiper } from 'swiper/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

type CarouselProps = {
  children: React.ReactNode;
};
export const Carousel = ({ children }: CarouselProps) => {
  return (
    <div className="swiper relative">
      <div className="swiper-prev hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer hover:text-gray-700 text-3xl">
        <FaChevronLeft />
      </div>
      <div className="swiper-container md:px-10">
        <Swiper
          breakpoints={{ 768: { slidesPerView: 4 } }}
          spaceBetween={16}
          slidesPerView={2}
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }}
          className="py-4"
        >
          {children}
        </Swiper>
        <div className="swiper-next hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer hover:text-gray-700 text-3xl">
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};
