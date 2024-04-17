import { ProductCard } from "./product-card"
import { ProdType } from "@/types/product-type"

enum SortBy {
    prodRate = 'prodRate',
    prodDate = 'prodDate',
    prodPrice = 'prodPrice'
}
type HomeSectionType = {
    sectionTitle:string,
    prodList:ProdType[],
    sortBy: keyof typeof SortBy
}
export const HomeSection = ({sectionTitle,prodList,sortBy}:HomeSectionType)=>{
    const sectionProdsList = sortBy === SortBy.prodRate? prodList.sort((a,b)=>b.prodRate-a.prodRate) :
    sortBy === SortBy.prodPrice? prodList.sort((a,b)=>b.offer!-a.offer!) : 
    prodList.sort((a,b)=>new Date(b.prodDate).getTime()-new Date(a.prodDate).getTime())  
    return <div className="section">
    <h1 className='section-title'>{sectionTitle}</h1>
    <div className="prods-list grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2">
        {sectionProdsList.map(prod=>{
            return <ProductCard 
            key={prod.prodId}
            prod={prod}
            twoColumnsStyle
            />
        })}
    </div>
    </div>
}