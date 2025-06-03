import { GraduationCap, Search } from "lucide-react";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetCoursesData } from "@/api/queries";
import { useQueryClient } from "@tanstack/react-query";

const Courses: React.FC = () => {
  const [category, setCategory] = useState<number>();
  const [query, setQuery] = useState<string>();
  const queryClient = useQueryClient();
  
  const { data, isFetching, fetchNextPage, refetch, isFetchingNextPage } = useGetCoursesData(
    category as number, 
    query as string
  );

  const coursesData = data?.pages?.[data?.pages?.length - 1];

  console.log(data);

  // Handler for category change
  const handleCategoryChange = (value: string) => {
    setCategory(Number(value));
    refetch();
  };

  // Load More Button Click
  const handleLoadMore = () => {
    fetchNextPage();
  };

  const searchCourse = (e: React.FormEvent) => {
    e.preventDefault()
    queryClient.removeQueries({
      queryKey: ["courses-data", { category, query }]
    });
    refetch()
  }

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="p-5 py-8 flex flex-col items-center text-center">
          <h2 className="text-5xl font-bold fancy-font bg-gradient-to-b from-secondary to-blue-700 bg-clip-text text-transparent">
            Free Courses
          </h2>
          <p className="text-sm text-foreground/70 font-semibold tracking-[4px]">
            Skill up with the free courses from Klikkup
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-0 flex justify-center">
        <form  className="flex items-center mb-4 w-full rounded-xl bg-[#f9f9f9] h-[50px] overflow-hidden md:w-[650px] border shadow-md">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value) }
            placeholder="Search a keyword"
            className="border-0 outline-none bg-transparent w-full px-5 py-3"
          />
          <button onClick={searchCourse} className="bg-secondary h-full px-6 flex justify-center items-center text-orange-100 cursor-pointer">
            <Search />
          </button>
        </form>
      </div>

      {/* Category Filter */}
      <div className="flex justify-between items-center gap-2 px-0 sm:px-8 md:px-20">
        <h2 className="text-lg text-foreground/70">Filter Category:</h2>
        <Select
          onValueChange={handleCategoryChange}
          value={category?.toString()}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categories</SelectLabel>
              {coursesData?.categories?.map((cat) => (
                <SelectItem key={cat.id} value={cat.id?.toString() as string}>
                  {cat.name} ({cat?.courses_count})
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-0 sm:px-8 md:px-20">
        {!isFetching && coursesData?.courses?.length === 0 && (
          <div className="col-span-full text-center text-muted-foreground">
            No courses found.
          </div>
        )}

        {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {(page?.courses || [])?.map((course) => (
              <div
                key={course.id}
                className="border rounded-2xl overflow-hidden sm:hover:scale-[1.05] transition-all duration-1000 shadow-xl"
              >
                <div className="flex justify-center items-center py-[50px] bg-gradient-to-tr from-secondary/20 via-primary/20 to-gray-300 from-[1%]">
                  <GraduationCap className="size-[60px]" />
                </div>
                <div className="space-y-[15px] p-5">
                  <h2 className="font-semibold">{course.title}</h2>
                  p
                  <a
                    href={course.course_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary rounded-full text-primary-foreground w-full py-2 text-sm inline-block text-center"
                  >
                    Go to course
                  </a>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}

        {/* Loading Skeletons */}
        {isFetching &&
          Array.from({ length: 6 }).map((_, index) => (
            <div
              key={`skeleton-${index}`}
              className="border rounded-2xl overflow-hidden animate-pulse"
            >
              <div className="flex justify-center items-center py-[50px] bg-gray-200"></div>
              <div className="space-y-[15px] p-5">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-8 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
          ))}
      </div>

      {/* Load More Button */}
      {!isFetchingNextPage && coursesData?.has_next && (
        <div className="flex justify-center">
          <button
            onClick={handleLoadMore}
            className="w-full py-3 text-sm border border-foreground md:w-[500px] rounded-xl bg-[#f9f9f9]"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Courses;
