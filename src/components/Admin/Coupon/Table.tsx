import DataTable from '@/components/ui/data-table'
import React from 'react'
import { columns } from './Column'
import { useGetCoupons } from '@/api/queries'
import { Coupon } from '@/types'




const Table: React.FC = () => {
  const { data } = useGetCoupons()
  console.log(data)
  return (
    <div className='w-full'>
      <DataTable columns={columns} data={data as Coupon[] || []} searchableColId='code' />
    </div>
  )
}

export default Table