import { ArrowUp } from "lucide-react"
import { useState } from "react"
import {motion} from 'framer-motion';

export const ScrollUpButton = ()=>{
    const [showScrollUpBtn,setShowScrollUpBtn] = useState(false);
    window.addEventListener('scroll',()=>{
        setShowScrollUpBtn(scrollY > 150)
    })
    const scrollUpHandler = ()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
    }
    return showScrollUpBtn && <motion.div 
        initial={{opacity:0,scale:0}} 
        animate={{opacity:1,scale:1}} 
        className="scroll-up-btn size-10 rounded-full fixed bottom-2 right-2 z-50 bg-slate-800 hover:bg-slate-700 text-white cursor-pointer flex items-center justify-center"
        onClick={scrollUpHandler}>
        <ArrowUp/>
    </motion.div>
}