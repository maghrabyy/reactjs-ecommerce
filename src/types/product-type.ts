type prodCategoryType = {
    categoryId: string,
    categoryTitle:string,
    subCategory?:prodCategoryType
}

type prodBrandType = {
    brandId:string,
    brandTitle:string
}

export type ProdType = {
    prodId:string,
    prodImg:string,
    availability:boolean,
    prodBrand:prodBrandType,
    prodCategory:prodCategoryType
    prodTitle:string,
    prodColor?:string,
    prodDesc:string,
    prodRate:number,
    prodStars:number
    prodPrice:number,
    offer?:number,
    prodDate:string
}