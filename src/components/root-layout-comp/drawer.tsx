import { useDrawerToggler } from '@/store/slices/drawerTogglerSlice';
import { useDispatch } from 'react-redux';
import { toggleDrawer } from '@/store/slices/drawerTogglerSlice';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import brands from '@/data/brands.json';
import categories from '@/data/categories.json';
import { NavLink } from 'react-router-dom';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const Drawer = () => {
  const dispatch = useDispatch();
  const drawerToggler = useDrawerToggler();
  const drawerTogglerHandler = () => {
    dispatch(toggleDrawer());
  };
  const drawerItemClickedHandler = () => {
    dispatch(toggleDrawer());
  };
  useEffect(() => {
    if (drawerToggler) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }, [drawerToggler]);
  return (
    drawerToggler && (
      <div className="drawer">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.65 }}
          onClick={drawerTogglerHandler}
          className="drawer-overlay fixed top-0 left-0 bg-black  h-full w-full z-[60]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="drawer-body sm:ps-20 ps-16 pe-4 fixed top-0 h-full lg:w-4/12 md:w-6/12 sm:w-8/12 w-10/12 bg-white z-[70] overflow-y-auto"
        >
          <div className="drawer-header flex items-center pb-4 pt-12 border-b border-b-slate-800">
            <h1 className="shop-title logo-link">Maghh Store</h1>
          </div>
          <div className="drawer-content section flex flex-col gap-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Categories</AccordionTrigger>
                <AccordionContent>
                  <Accordion className="px-2" type="single" collapsible>
                    {categories
                      .filter((category) => category.subCategories)
                      .map((cat) => {
                        const categoryTitle = cat.categoryTitle.replace(
                          ' ',
                          '-',
                        );
                        return (
                          <AccordionItem
                            key={cat.categoryId}
                            value={cat.categoryId}
                          >
                            <AccordionTrigger>
                              {cat.categoryTitle}
                            </AccordionTrigger>
                            {cat.subCategories!.map((subcategory) => {
                              const subcategoryTitle =
                                subcategory.categoryTitle.replace(' ', '-');
                              return (
                                <AccordionContent key={subcategory.categoryId}>
                                  <NavLink
                                    to={`/collections/${categoryTitle}/${subcategoryTitle}`}
                                    onClick={drawerItemClickedHandler}
                                    className="px-2 nav-link"
                                  >
                                    {subcategory.categoryTitle}
                                  </NavLink>
                                </AccordionContent>
                              );
                            })}
                          </AccordionItem>
                        );
                      })}
                  </Accordion>
                </AccordionContent>
                {categories
                  .filter((category) => !category.subCategories)
                  .map((cat) => {
                    const categoryTitle = cat.categoryTitle.replace(' ', '-');
                    return (
                      <AccordionContent key={cat.categoryId}>
                        <NavLink
                          to={`/collections/${categoryTitle}`}
                          onClick={drawerItemClickedHandler}
                          className="px-2 nav-link"
                        >
                          {cat.categoryTitle}
                        </NavLink>
                      </AccordionContent>
                    );
                  })}
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Brands</AccordionTrigger>
                {brands.map((brand) => {
                  const brandTitle = brand.brandTitle.replace(' ', '-');
                  return (
                    <AccordionContent key={brand.brandId}>
                      <NavLink
                        to={`/collections/${brandTitle}'}`}
                        onClick={drawerItemClickedHandler}
                        className="px-2 nav-link"
                      >
                        {brand.brandTitle}
                      </NavLink>
                    </AccordionContent>
                  );
                })}
              </AccordionItem>
            </Accordion>
            <NavLink
              onClick={drawerItemClickedHandler}
              to={'/deals'}
              className="nav-link"
            >
              Deals
            </NavLink>
            <NavLink
              onClick={drawerItemClickedHandler}
              to={'/about'}
              className="nav-link"
            >
              About
            </NavLink>
            <NavLink
              onClick={drawerItemClickedHandler}
              to={'contact-us'}
              className="nav-link"
            >
              Contact Us
            </NavLink>
          </div>
        </motion.div>
      </div>
    )
  );
};
