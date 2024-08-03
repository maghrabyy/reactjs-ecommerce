import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useParams } from 'react-router-dom';
import products from '@/data/products.json';
import { ProductDetails } from '@/components/products-details-comp/productsDetails';

export const ProductDetailsPage = () => {
  const { prodId } = useParams() as {
    prodId: string;
  };
  const productIndex = products.map((prod) => prod.prodId).indexOf(prodId);
  const product = products[productIndex];
  const productTitle = `${product?.prodBrand.brandTitle} ${product?.prodTitle}`;
  const prodCategoryTitle = product.prodCategory.categoryTitle.replace(
    ' ',
    '-',
  );
  const prodSubCategoryTitle =
    product.prodCategory.subCategory?.categoryTitle.replace(' ', '-');
  return (
    <div className="section space-y-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/collections">Categories</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/collections/${prodCategoryTitle}s`}>
              {product.prodCategory.categoryTitle}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {product.prodCategory.subCategory && (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={`/collections/${prodCategoryTitle}s/${prodSubCategoryTitle}s`}
                >
                  {product.prodCategory.subCategory.categoryTitle}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          )}
          <BreadcrumbItem>
            <BreadcrumbPage>{productTitle}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <ProductDetails product={product} />
    </div>
  );
};
