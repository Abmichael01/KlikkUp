import DataTable from '@/components/ui/data-table'
import React from 'react'
import { columns } from './Column'
import { useGetUsers } from '@/api/queries'
import { User } from '@/types'
import LoadingTableData from '../LoadingTableData'



const Table: React.FC = () => {
  const { data, isLoading } = useGetUsers()
  
  if (isLoading) return <LoadingTableData />

  return (
    <div className="w-full">
      <DataTable columns={columns} data={data as User[] || []} searchableColId='username' />
    </div>
  ) 
}

export default Table