import DataTable from '@/components/ui/data-table'
import React from 'react'
import { columns } from './Column'
import { useGetTasks } from '@/api/queries'
import { Task } from '@/types'
import LoadingTableData from '../LoadingTableData'




const Table: React.FC = () => {
  const { data, isLoading } = useGetTasks()
  if (isLoading) return <LoadingTableData />
  return (
    <div className="w-full">
      <DataTable columns={columns} data={data as Task[] || []} searchableColId='title' />
    </div>
  )
}

export default Table