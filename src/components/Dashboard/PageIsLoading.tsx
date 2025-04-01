import React from "react";
import { Skeleton } from "../ui/skeleton";

const PageIsLoading: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} className="h-[140px] bg-gray-200 shadow-md" />
        ))}
      </div>
      {Array.from({ length: 5 }).map((_, index) => (
        <Skeleton key={index} className="h-[140px] bg-gray-200" />
      ))}
    </div>
  );
};

export default PageIsLoading;
