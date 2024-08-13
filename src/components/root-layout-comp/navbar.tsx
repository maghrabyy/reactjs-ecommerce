import { ShoppingCart } from 'lucide-react';
import { Search } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import { DrawerHamburgerToggler } from './drawerHamburgerIcon';
import { Badge } from 'antd';
import { useShoppingCartItems } from '@/store/slices/shoppingCartSlice';
import categories from '@/data/categories.json';
import brands from '@/data/brands.json';
import { Flame } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { AccountMenu } from './accountMenu';

export const Navbar = () => {
  const navigate = useNavigate();
  const shoppingCartItems = useShoppingCartItems();
  return (
    <div className="nav">
      <DrawerHamburgerToggler />
      <div className="navbar  fixed w-full top-0 z-[50] shadow-md">
        <div className="navbar-banner bg-black text-white text-center">
          <Marquee direction="right">
            <p>website under construction.</p>
          </Marquee>
        </div>
        <div className="navbar-main bg-white bg-opacity-85 backdrop-blur-sm section py-6 flex justify-between items-center ">
          <div className="burger-icon-space md:hidden block"></div>
          <div className="navbar-title flex gap-4">
            <h1 onClick={() => navigate('/')} className="logo-link">
              Maghh Store
            </h1>
          </div>
          <div className="navbar-menu md:flex gap-4 hidden">
            <NavLink to={'/deals'} className="nav-link flex items-center gap-1">
              <Flame /> Deals
            </NavLink>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                  <NavigationMenuContent className="p-4">
                    <ul className="grid grid-cols-2 space-x-8 divide-x-2 xl:w-[600px] lg:w-[550px] md:w-[400px]">
                      <li>
                        <NavigationMenuLink className="font-semibold select-none">
                          Categories
                        </NavigationMenuLink>
                        <ul className="w-[300px] lg:h-[250px] flex flex-col gap-1 flex-wrap pt-2">
                          {categories.map((category) => {
                            const categoryTitle =
                              category.categoryTitle.replace(' ', '-');
                            return (
                              <li key={category.categoryId}>
                                <NavigationMenuLink
                                  href={`/collections/${categoryTitle}`}
                                  className="nav-link font-semibold"
                                >
                                  {category.categoryTitle}
                                </NavigationMenuLink>
                                <div className="flex flex-col gap-1">
                                  {category.subCategories?.map((subcat) => {
                                    const subCategoryTitle =
                                      subcat.categoryTitle.replace(' ', '-');
                                    return (
                                      <NavigationMenuLink
                                        href={`/collections/${categoryTitle}/${subCategoryTitle}`}
                                        key={subcat.categoryId}
                                        className="nav-link ms-1"
                                      >
                                        {subcat.categoryTitle}
                                      </NavigationMenuLink>
                                    );
                                  })}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                      <li className="ps-5">
                        <NavigationMenuLink className="font-semibold select-none">
                          Brands
                        </NavigationMenuLink>
                        <ul className="w-[300px] lg:grid grid-cols-2 flex flex-col gap-1 pt-2">
                          {brands.map((brand) => {
                            const brandTitle = brand.brandTitle.replace(
                              ' ',
                              '-',
                            );
                            return (
                              <li key={brand.brandId}>
                                <NavigationMenuLink
                                  className="nav-link"
                                  href={`/collections/${brandTitle}`}
                                >
                                  {brand.brandTitle}
                                </NavigationMenuLink>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavLink to={'/about'} className="nav-link">
              About
            </NavLink>
            <NavLink to={'contact-us'} className="nav-link">
              Contact Us
            </NavLink>
          </div>
          <div className="navbar-account flex items-center gap-4">
            <Search className="cursor-pointer hover:text-slate-700" />
            <Badge
              count={shoppingCartItems.length}
              style={{ backgroundColor: '#272E3F' }}
            >
              <ShoppingCart
                onClick={() => navigate('/shopping-cart')}
                className="cursor-pointer hover:text-slate-700"
              />
            </Badge>
            <AccountMenu />
          </div>
        </div>
      </div>
    </div>
  );
};
