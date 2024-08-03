import { ProdType } from '@/types/product-type';
import { Carousel } from '../carousel';
import { SwiperSlide } from 'swiper/react';
import { MiniProductCard } from '../product-card';

type SimilarProductsProps = {
  similarProds: ProdType[];
};
export const SimilarProducts = ({ similarProds }: SimilarProductsProps) => {
  return (
    similarProds.length > 0 && (
      <div className="similar-products mt-4 md:mt-10">
        <h1>Similar Products</h1>
        <Carousel mdSlidesNum={2} spaceBetween={6}>
          {similarProds.map((prod) => (
            <SwiperSlide key={prod.prodId}>
              <MiniProductCard prod={prod} />
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    )
  );
};
