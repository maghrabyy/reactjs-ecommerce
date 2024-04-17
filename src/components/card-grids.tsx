import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"

export const CardsGrid = ()=>{
    const navigate = useNavigate();
    return <div className="top-categories grid md:grid-cols-3 md:gap-4 gap-2 section">
    <div className="grid grid-cols-2 md:gap-4 gap-2 col-span-2">
        <div className="panel col-span-2 flex lg:flex-row flex-col lg:gap-0 gap-2 justify-between px-4">
            <div className="m-auto flex gap-2">
                <img src="/products/fender-strat-guitar.png" width={70} alt="fender stratocaster blue electric guitar" />
                <img src="/products/fender-guitar.png" width={100} alt="fender stratocaster red electric guitar" />
                <img src="/products/gibson-guitar.png" width={70} alt="gibson red electric guitar" />
            </div>
            <div className="card content flex gap-2 flex-col lg:self-end self-center">
                <h1>Explore electric guitars.</h1>
                <Button>Shop now</Button>
            </div>
        </div>
        <div className="panel flex justify-center relative overflow-hidden">
            <img src="/products/jbl-speaker.png" width={175} alt="JBL Speaker" />
            <div className="card content flex gap-2 flex-col sm:items-end items-center absolute bottom-0 right-0 bg-slate-800 w-full text-slate-200 bg-opacity-65 sm:px-4 py-2">
                <h1 className="md:text-base text-xs text-center">Equip your own studio.</h1>
                <Button>Shop now</Button>
            </div>
        </div>
        <div className="panel flex items-center gap-2 justify-center relative overflow-hidden">
            <img src="/products/fender-bass-guitar.png" className=" rotate-45 md:w-20 w-16" alt="fender bass guitar" />
            <div className="card content flex gap-2 flex-col sm:items-end items-center absolute bottom-0 right-0 bg-slate-800 w-full text-slate-200 bg-opacity-65 sm:px-4 py-2">
                <h1 className="md:text-base text-sm">Up to 50% sale.</h1>
                <Button onClick={()=>navigate('/deals')}>Shop now</Button>
            </div>
        </div>
    </div>
    <div className="panel flex flex-col items-center justify-center md:col-span-1 col-span-2">
        <img src="/products/guitar-pic.png" width={180} alt="fender 1.00mm guitar pick" />
        <div className="card content flex gap-2 flex-col">
                <h1>Explore guitar accessories.</h1>
                <Button>Shop now</Button>
            </div>
    </div>
</div>
}