import { prodCategoryType } from '@/types/product-type';
import { ProductsList } from '@/components/productsList';
import products from '@/data/products.json';

type SubCategoryPageProps = {
  subCategory: prodCategoryType;
};

export const SubCategoryPage = ({ subCategory }: SubCategoryPageProps) => {
  const categorizedProducts = products.filter(
    (prod) =>
      prod.prodCategory.subCategory?.categoryId === subCategory.categoryId,
  );
  return <ProductsList prodList={categorizedProducts} />;
};
