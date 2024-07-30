import categories from '@/data/categories.json';
import brands from '@/data/brands.json';
import { CollectionItem } from '@/components/collectionItem';

export const CollectionsPage = () => {
  return (
    <div className="collection-page grid gap-4 grid-cols-2 md:grid-cols-4 py-2">
      {categories.map((category) => {
        const categoryTitle = category.categoryTitle.replace(' ', '-');
        return (
          <CollectionItem
            path={`/collections/${categoryTitle}`}
            key={category.categoryId}
            img={category.categoryImg}
            title={category.categoryTitle}
          />
        );
      })}
      {brands.map((brand) => {
        const brandTitle = brand.brandTitle.replace(' ', '-');
        return (
          <CollectionItem
            path={`/collections/${brandTitle}`}
            key={brand.brandId}
            img={brand.brandImg}
            title={brand.brandTitle}
          />
        );
      })}
    </div>
  );
};
