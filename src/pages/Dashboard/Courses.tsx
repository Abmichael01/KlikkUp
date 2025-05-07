import { CardContent } from "@/components/ui/card";
import GlidingButton from "@/components/ui/GlidingButton";
import GradientCard from "@/components/ui/GradientCard";
import { BookOpen, Search } from "lucide-react";
import React from "react";

const Courses: React.FC = () => {
  return (
    <div className="space-y-6">
      <GradientCard>
        <CardContent className="p-5 py-8 flex flex-col items-center text-center text-white">
          <h2 className="text-xl font-semibold fancy-font">Free Courses</h2>
          <p className="text-sm">Skill up with free courses from Klikkup</p>
        </CardContent>
      </GradientCard>
      <GradientCard className="p-0">
        <CardContent className="p-5 py-6 text-center text-white">
          <div className="flex items-center mb-4 bg-white/10 shadow-xl  w-full rounded-full h-[50px] overflow-hidden">
            <input
              type="text"
              placeholder="Search a keyword"
              className="border-0  outline-none bg-transparent w-full px-5 py-2"
            />
            <div className="bg-gradient-to-tr from-orange-400 via-secondary to-orange-600 h-full px-6 flex justify-center items-center rounded-full cursor-pointer">
              <Search />
            </div>
          </div>
        </CardContent>
      </GradientCard>
      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="bg-blue-00 shadow-xl rounded-xl space-y-5 border p-5"
          >
            <div className="">
              <div className="flex gap-2 items-center pb-5">
                <div className=" text-orange-600 bg-orange-200 rounded-full size-[40px] flex items-center justify-center">
                  <BookOpen className="size-[20px]" />
                </div>
                <h2 className="font-medium">
                  Here is the course the course name
                </h2>
              </div>
              <GlidingButton className="bg-blue-900 px-5 py-2 text-sm float-end">
                Go to course
              </GlidingButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
