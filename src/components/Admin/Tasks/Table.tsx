import DataTable from '@/components/ui/data-table'
import React from 'react'
import { columns } from './Column'
import { useGetTasks } from '@/api/queries'
import { Task } from '@/types'




const Table: React.FC = () => {
  const { data } = useGetTasks()
  console.log(data)
  return (
    <div className="w-full">
      <DataTable columns={columns} data={data as Task[] || []} searchableColId='title' />
    </div>
  )
}

export default Table