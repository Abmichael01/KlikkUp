import { cn } from "@/lib/utils"
import type React from "react"
import LoadingAnimation from "../LoadingAnimation"

interface GlidingButtonProps {
  children: React.ReactNode
  className?: string
  isLoading?: boolean
}

const GlidingButton: React.FC<GlidingButtonProps> = ({ children, className, isLoading = false }) => {
  return (
    <button
      className={cn(
        "self-center px-10 py-3 bg-black relative rounded-lg group overflow-hidden text-white flex gap-2 items-center [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
        className,
      )}
      disabled={isLoading}
    >
      <div className="absolute top-[1.5px] left-[1px] right-[1px] w-full h-full bg-transparent border-t rounded-lg group-active:top-[0.5px]"></div>
      <div className="w-[40px] h-[110px] bg-white/20 absolute top-[-10px] left-[-80px] group-hover:left-[130%] button-hover-effect"></div>

      {isLoading ? <LoadingAnimation size="small" className="mr-2" /> : null}
      {children}
    </button>
  )
}

export default GlidingButton

