import React from 'react'
import { Skeleton } from '../ui/skeleton'

const LoadingTableData: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
        {[...Array(8)].map((_, i) => (
            <Skeleton key={i} className='w-full h-[50px]' />
        ))}
    </div>
  )
}

export default LoadingTableData