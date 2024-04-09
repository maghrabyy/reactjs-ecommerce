import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Search } from 'lucide-react';
import { User } from 'lucide-react';
import { MenuIcon } from 'lucide-react';
import Marquee from 'react-fast-marquee';

export const Navbar = ()=>{
    return <div className="navbar bg-white bg-opacity-85 backdrop-blur-sm fixed w-full top-0 z-50">
      <div className="navbar-banner bg-black text-white text-center">
        <Marquee direction='right'>
          <p>website under construction.</p>
        </Marquee>
      </div>
      <div className="navbar-main section flex justify-between items-center">
      <div className="navbar-title font-bold flex gap-4">
        <MenuIcon className='block md:hidden'/>
        <h1 className='select-none'>Maghh Store</h1>
      </div>
      <div className="navbar-menu md:flex gap-2 hidden">
        <Button variant='link'>Home</Button>
        <Button variant='link'>Categories</Button>
        <Button variant='link'>Contact Us</Button>
        <Button variant='link'>About</Button>
      </div>
      <div className="navbar-account flex items-center gap-4">
          <Search className='cursor-pointer hover:text-slate-700'/>
          <Heart className='cursor-pointer hover:text-slate-700'/>
          <ShoppingCart className='cursor-pointer hover:text-slate-700'/>
          <User className='cursor-pointer hover:text-slate-700'/>
      </div>
        </div>
    </div>
}