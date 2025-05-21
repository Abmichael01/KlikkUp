import { useGetCourseCategories } from '@/api/queries'
import React from 'react'
import Actions from './Categories/Actions'

const Categories: React.FC = () => {
    const { data } = useGetCourseCategories()
  return (
    <div className="space-y-5">
        <h1 className="font-bold">Course Categories</h1>
        <div className="grid max-[300px]:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {
            data?.map((cat, index) => (
                <div key={index} className="border rounded-xl shadow-md p-5 flex justify-between">
                    <div className="space-y-5">
                        <h1 className="text-sm uppercase">{cat.name}</h1>
                        <p className="text-primary text-xs">{cat.courses_count} courses</p>
                    </div>
                    <Actions category={cat} />
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default Categories