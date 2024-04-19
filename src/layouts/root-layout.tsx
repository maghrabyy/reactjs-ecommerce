import { Drawer } from "@/components/root-layout-comp/drawer"
import { Navbar } from "@/components/root-layout-comp/navbar"
import { Footer } from "@/components/root-layout-comp/footer"
import { ScrollUpButton } from "@/components/root-layout-comp/scrollup-btn"
import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

const NAVBAR_HEIGHT = 96;

export const RootLayout = ()=>{
    const path = useLocation().pathname;
    useEffect(()=>{
        window.scrollTo({top:0})
    },[path])
    return <div className="root-layout flex flex-col h-screen">
        <Drawer/>
        <ScrollUpButton/>
        <Navbar/>
        <div className="page-content flex-1" style={{marginTop:NAVBAR_HEIGHT}}>
            <Outlet />
        </div>
        <Footer/>
    </div>
}