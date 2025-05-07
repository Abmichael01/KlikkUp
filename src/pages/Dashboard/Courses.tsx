import { GraduationCap, Search } from "lucide-react";
import React from "react";

const Courses: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <div className="p-5 py-8 flex flex-col items-center text-center">
          <h2 className="text-5xl font-bold fancy-font bg-gradient-to-b from-secondary to-primary bg-clip-text text-transparent">Free Courses</h2>
          <p className="text-sm text-foreground/70 font-medium">Skill up with the free courses from Klikkup</p>
        </div>
      </div>
      <div className="p-0 flex justify-center">
          <div className="flex items-center mb-4 w-full rounded-xl bg-[#f9f9f9] h-[50px] overflow-hidden md:w-[650px] border-4 border-secondary/10 focus:border-secondary/30">
            <input
              type="text"
              placeholder="Search a keyword"
              className="border-0  outline-none bg-transparent w-full px-5 py-3 "
            />
            <div className="bg-secondary h-full px-6 flex justify-center items-center text-orange-100 cursor-pointer">
              <Search />
            </div>
          </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-0 sm:px-8 md:px-20">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="border rounded-2xl overflow-hidden sm:hover:scale-[1.05] transition-all duration-1000 shadow-xl">
            <div className="flex justify-center items-center py-[50px] bg-gradient-to-tr from-secondary/20 via-primary/20 to-gray-300 from-[1%]">
              <GraduationCap className="size-[60px]"/>
            </div>
            <div className="space-y-[15px] p-5">
              <h2 className="">This is the title of the course</h2>
              <button className="bg-primary rounded-full text-primary-foreground w-full py-2 text-sm">Go to course</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
