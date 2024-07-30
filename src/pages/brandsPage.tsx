import { ProductsList } from '@/components/Collection-layout-comp/productsList';
import products from '@/data/products.json';
import { useOutlet } from 'react-router-dom';
import { prodBrandType } from '@/types/product-type';

type BrandsPageProps = {
  brand: prodBrandType;
};

export const BrandsPage = ({ brand }: BrandsPageProps) => {
  const categorizedProducts = products.filter(
    (prod) => prod.prodBrand.brandId === brand.brandId,
  );
  const outlet = useOutlet();
  return outlet || <ProductsList prodList={categorizedProducts} />;
};
