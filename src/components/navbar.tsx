import { ShoppingCart } from 'lucide-react';
import { Search } from 'lucide-react';
import { User } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import { DrawerHamburgerToggler } from './drawerHamburgerIcon';
import { Badge } from "antd";
import { useShoppingCartItems } from '@/store/slices/shoppingCartSlice';
import { ChevronDown } from 'lucide-react';
import { Flame } from 'lucide-react';

export const Navbar = ()=>{
    const shoppingCartItems = useShoppingCartItems();
    return <div className="nav">
      <DrawerHamburgerToggler/>
      <div className="navbar  fixed w-full top-0 z-[50] shadow-md">
        <div className="navbar-banner bg-black text-white text-center">
          <Marquee direction='right'>
            <p>website under construction.</p>
          </Marquee>
        </div>
        <div className="navbar-main bg-white bg-opacity-85 backdrop-blur-sm md:px-8 section py-6 flex justify-between items-center ">
          <div className="burger-icon-space md:hidden block"></div>
        <div className="navbar-title flex gap-4">
          <h1 className='logo-link'>Maghh Store</h1>
        </div>
        <div className="navbar-menu md:flex gap-4 hidden">
          <div className='nav-link flex items-center gap-1'><Flame/> Deals</div>
          <div className='nav-link flex items-center gap-2'>Categories <ChevronDown/></div>
          <div className='nav-link'>About</div>
          <div className='nav-link'>Contact Us</div>
        </div>
        <div className="navbar-account flex items-center gap-4">
            <Search className='cursor-pointer hover:text-slate-700'/>
            <Badge count={shoppingCartItems.length} style={{ backgroundColor: '#272E3F' }}>
              <ShoppingCart className='cursor-pointer hover:text-slate-700'/>
            </Badge>
            <User className='cursor-pointer hover:text-slate-700'/>
        </div>
          </div>
      </div>
    </div>
}