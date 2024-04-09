import { ProductCard } from "./product-card"

export type prodType = {
    prodId:string,
    prodImg:string,
    availability:boolean,
    prodTitle:string,
    prodDesc:string,
    prodRate:number,
    prodStars:number
    prodPrice:number,
    offer?:number,
    prodDate:Date
}

enum SortBy {
    prodRate = 'prodRate',
    prodDate = 'prodDate',
    prodPrice = 'prodPrice'
}
type HomeSectionType = {
    sectionTitle:string,
    prodList:prodType[],
    sortBy: keyof typeof SortBy
}
export const HomeSection = ({sectionTitle,prodList,sortBy}:HomeSectionType)=>{
    const sectionProdsList = sortBy === SortBy.prodRate? prodList.sort((a,b)=>b.prodRate-a.prodRate) :
    sortBy === SortBy.prodPrice? prodList.sort((a,b)=>b.offer!-a.offer!) : 
    prodList.sort((a,b)=>b.prodDate.getTime()-a.prodDate.getTime())  
    return <div className="section">
    <h1 className='section-title'>{sectionTitle}</h1>
    <div className="prods-list grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-2 ">
        {sectionProdsList.map(prod=>{
            return <ProductCard 
            key={prod.prodId}
            prodImg={prod.prodImg} 
            prodAvailability={prod.availability}
            prodTitle={prod.prodTitle}
            prodDesc={prod.prodDesc}
            prodRate={prod.prodRate}
            prodStars={prod.prodStars}
            prodPrice={prod.prodPrice}
            prodOffer={prod.offer}/>
        })}
    </div>
    </div>
}