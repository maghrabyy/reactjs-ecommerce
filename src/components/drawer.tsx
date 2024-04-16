import { useDrawerToggler } from "@/store/slices/drawerTogglerSlice"
import { useDispatch } from "react-redux";
import { toggleDrawer } from "@/store/slices/drawerTogglerSlice";
import { motion } from 'framer-motion';
import { useEffect } from "react";
import brands from '@/data/brands.json';
import categories from '@/data/categories.json';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export const Drawer = ()=>{
    const dispatch = useDispatch();
    const drawerToggler = useDrawerToggler();
    const drawerTogglerHandler = ()=>{
        dispatch(toggleDrawer());
    }
    useEffect(()=>{
        if(drawerToggler){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflowY = 'scroll';
        }
    },[drawerToggler])
    return drawerToggler && <div className="drawer md:hidden block">
        <motion.div initial={{opacity:0}} animate={{opacity:0.65}} onClick={drawerTogglerHandler} className="drawer-overlay fixed top-0 left-0 bg-black  h-full w-full z-[60]"></motion.div>
        <motion.div 
            initial={{opacity:0}} 
            animate={{opacity:1}} 
            transition={{duration:1}} 
            className="drawer-body ps-16 pe-4 fixed top-0 h-full sm:w-6/12 w-10/12 bg-white z-[70] overflow-y-auto">
            <div className="drawer-header flex items-center pb-4 pt-10 border-b border-b-slate-800">
                <h1 className="shop-title font-bold">Maghh Store</h1>
            </div>
            <div className="drawer-content section flex flex-col gap-4">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Categories</AccordionTrigger>
                        {categories.map((category,index)=>
                        <AccordionContent key={category.categoryId}>
                            {category.subCategories? 
                            <Accordion className="px-2" type="single" collapsible>
                                <AccordionItem value={`item-${index+1}`}>
                                    <AccordionTrigger>{category.categoryTitle}</AccordionTrigger>
                                    {category.subCategories.map(subcategory=>
                                    <AccordionContent key={subcategory.categoryId} className="nav-link">
                                        {subcategory.categoryTitle}
                                    </AccordionContent>)}
                                </AccordionItem>
                            </Accordion>
                            : 
                            <div className="main-categories nav-link px-2">{category.categoryTitle}</div>}
                        </AccordionContent>)}
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Brands</AccordionTrigger>
                        {brands.map(brand=><AccordionContent key={brand.brandId} className="px-2 nav-link">
                            {brand.brandTitle}
                        </AccordionContent>)}
                    </AccordionItem>
                </Accordion>
                <div className="nav-link">Contact Us</div>
                <div className="nav-link">About</div>
            </div>
        </motion.div>
    </div>
}