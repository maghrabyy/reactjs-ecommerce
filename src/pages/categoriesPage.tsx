import { Carousel } from '@/components/carousel';
import { SwiperSlide } from 'swiper/react';
import { CollectionItem } from '@/components/collectionItem';
import { ProductsList } from '@/components/productsList';
import products from '@/data/products.json';
import { useOutlet } from 'react-router-dom';
import { prodCategoryType } from '@/types/product-type';

type CateogerisPageProps = {
  category: prodCategoryType;
};

export const CategoriesPage = ({ category }: CateogerisPageProps) => {
  const categorizedProducts = products.filter(
    (prod) => prod.prodCategory.categoryId === category.categoryId,
  );
  const outlet = useOutlet();
  const categoryTitle = category.categoryTitle.replace(' ', '-');
  return (
    outlet || (
      <div className="categories-page">
        {category?.subCategories && (
          <Carousel>
            {category.subCategories.map((subCategory) => {
              const subCategoryTitle = subCategory.categoryTitle.replace(
                ' ',
                '-',
              );
              return (
                <SwiperSlide key={subCategory.categoryId}>
                  <CollectionItem
                    path={`/collections/${categoryTitle}/${subCategoryTitle}`}
                    img={subCategory.categoryImg}
                    title={subCategory.categoryTitle}
                  />
                </SwiperSlide>
              );
            })}
          </Carousel>
        )}
        <ProductsList prodList={categorizedProducts} />
      </div>
    )
  );
};
