import DataTable from '@/components/ui/data-table'
import React from 'react'
import { columns } from './Columns'
import { useAnnouncementData } from '@/api/queries'
import { Announcement } from '@/types'
import LoadingTableData from '../LoadingTableData'

const Table: React.FC = () => {
  const { data, isLoading } = useAnnouncementData()
  if (isLoading) return <LoadingTableData />
  return (
    <div className="w-full">
      <DataTable columns={columns} data={data as Announcement[] || []} searchableColId='title' />
    </div>
  )
}

export default Table