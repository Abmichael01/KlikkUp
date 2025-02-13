import DataTable from '@/components/ui/data-table'
import React from 'react'
import { columns } from './Column'
import { useGetStories } from '@/api/queries'
import { Story } from '@/types'




const Table: React.FC = () => {
  const { data } = useGetStories()
  console.log(data)
  return (
    <div>
      <DataTable columns={columns} data={data as Story[] || []} searchableColId='title' />
    </div>
  )
}

export default Table