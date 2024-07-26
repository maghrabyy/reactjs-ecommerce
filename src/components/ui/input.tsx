import * as React from "react"
import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}


const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type,prefix, ...props }, ref) => {
    const prefixRef =  useRef<HTMLInputElement | null>(null);
    const [prefixPadding, setPrefixPadding] = useState<number | undefined>(0); 
    useEffect(()=>{
      if(prefix){
        setPrefixPadding(prefixRef.current?.clientWidth)
      }
    },[prefix])
    return (
      <div className="input relative w-full">
        {prefix && <div ref={prefixRef} className="prefix absolute left-3 top-[0.70rem] text-sm">
          {prefix}
        </div>}
        <input
          type={type}
          style={prefix? 
            {
              paddingLeft:prefixPadding!+15,
              paddingRight:'0.75rem' 
            } 
            : 
            {
              paddingLeft:'0.75rem',
              paddingRight:'0.75rem'
            }}
          className={cn(
            `flex h-10 w-full rounded-md border border-input bg-background py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
