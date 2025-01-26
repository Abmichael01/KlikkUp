import { cn } from '@/lib/utils';
import React from 'react'

interface MainPaddingProps {
    children: React.ReactNode;
    className?: string;
}

const MainPadding: React.FC<MainPaddingProps> = ({
    children,
    className,
  
}) => {
  return (
    <div className={cn(
        "px-20",
        className,
  
    )}>
        {children}
    </div>
  )
}

export default MainPadding