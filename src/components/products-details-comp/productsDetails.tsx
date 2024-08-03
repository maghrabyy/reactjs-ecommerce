import products from '@/data/products.json';
import { ProdType } from '@/types/product-type';
import { SimilarProducts } from './similarProducts';
import { ProductsInfo } from './productInfo';
import { ProductReview } from './productReview';

type ProductDetailProps = {
  product: ProdType;
};
export const ProductDetails = ({ product }: ProductDetailProps) => {
  const similarProducts = product.prodCategory.subCategory
    ? products.filter(
        (prod) =>
          prod.prodCategory.subCategory?.categoryId ===
            product.prodCategory.subCategory?.categoryId &&
          prod.prodId !== product.prodId,
      )
    : products.filter(
        (prod) =>
          prod.prodCategory.categoryId === product.prodCategory.categoryId &&
          prod.prodId !== product.prodId,
      );
  return (
    <div className="product-details grid gap-6 md:grid-cols-5 grid-cols-1">
      <div className="prod-img md:col-span-2 place-self-center md:self-auto">
        <img
          src={product.prodImg}
          className="max-h-[500px]"
          alt={product.prodDesc}
        />
      </div>
      <div className="prod-info pt-6 flex flex-col gap-2 md:col-span-3">
        <ProductsInfo product={product} />
        <ProductReview
          prodRating={product.prodRate}
          prodStars={product.prodStars}
        />
        <SimilarProducts similarProds={similarProducts} />
      </div>
    </div>
  );
};
