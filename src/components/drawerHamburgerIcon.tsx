import { useDispatch } from 'react-redux';
import { toggleDrawer } from '@/store/slices/drawerTogglerSlice';
import { useDrawerToggler } from '@/store/slices/drawerTogglerSlice';
import { Sling as Hamburger } from 'hamburger-react'

export const DrawerHamburgerToggler = ()=>{
    const drawerToggler = useDrawerToggler();
    const dispatch = useDispatch();
    const drawerTogglerHandler = ()=>{
      dispatch(toggleDrawer());
    }
    return <div className={`drawer-toggle-burger ${!drawerToggler && 'md:hidden'} block fixed top-9 sm:left-6 z-[100]`}>
    <Hamburger toggled={drawerToggler} onToggle={drawerTogglerHandler} size={24 }/>
  </div>
}