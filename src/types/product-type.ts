export type prodCategoryType = {
  categoryId: string;
  categoryTitle: string;
  categoryImg: string;
  subCategories?: prodCategoryType[];
};

export type prodBrandType = {
  brandId: string;
  brandTitle: string;
  brandImg: string;
};

type prodCategory = {
  categoryId: string;
  categoryTitle: string;
  categoryImg: string;
  subCategory?: prodCategory;
};

export type ProdType = {
  prodId: string;
  prodImg: string;
  availability: boolean;
  prodBrand: prodBrandType;
  prodCategory: prodCategory;
  prodTitle: string;
  prodColor?: string;
  prodDesc: string;
  prodRate: number;
  prodStars: number;
  prodPrice: number;
  offer?: number;
  prodDate: string;
};
