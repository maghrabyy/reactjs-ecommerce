import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

enum ShoppingPhases { shoppingCart, shippingDetails, paymentMethod }

type ShoppingBreadCrumbType = {
    currentPhase: keyof typeof ShoppingPhases
}
export const ShoppingBreadCrumb = ({currentPhase}:ShoppingBreadCrumbType)=>{
    return <div className="shopping-breadcrumb pb-4">
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbPage className={currentPhase === 'shoppingCart'? 'font-bold' : 'font-normal'}>Shopping Cart</BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage className={currentPhase === 'shippingDetails'? 'font-bold' : 'font-normal'}>Shipping</BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage className={currentPhase === 'paymentMethod'? 'font-bold' : 'font-normal'}>Payment</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    </div>
}