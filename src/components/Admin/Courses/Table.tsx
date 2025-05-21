import DataTable from '@/components/ui/data-table'
import React from 'react'
import { columns } from './Column'
import { useGetAllCourses } from '@/api/queries'
import { Course } from '@/types'
import LoadingTableData from '../LoadingTableData'




const Table: React.FC = () => {
  const { data: courses, isLoading } = useGetAllCourses()
  console.log(courses)
  if (isLoading) return <LoadingTableData />

  return (
    <div className="w-full">
      <DataTable columns={columns} data={courses as Course[] || []} searchableColId='title' />
    </div>
  )
}

export default Table