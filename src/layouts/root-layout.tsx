import { Drawer } from "@/components/drawer"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollUpButton } from "@/components/scrollup-btn"
import { Outlet } from "react-router-dom"

const NAVBAR_HEIGHT = 96;

export const RootLayout = ()=>{
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