import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {accountOverview, analyticsData, getAllCourses, getCoupons, getCoursesCategories, getCoursesData, getReferralsData, getStories, getStoriesData, getStory, getTasks, getTasksData, getUser, getUsers, getWalletData, roadmapData} from "@/api/apiEndpoints";
import { CoursesData } from "@/types";

// Fetch Current User
export const useGetUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false,
  });
};

export const useGetCoupons = () => {
  return useQuery({
    queryKey: ["coupons"],
    queryFn: getCoupons,  
  });
};

export const useGetTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });
};

export const useGetStories = () => {
  return useQuery({
    queryKey: ["stories"],
    queryFn: getStories,
  });
};

export const useGetUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
};


export const useGetAllCourses = () => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: getAllCourses,
  });
};

export const useGetCourseCategories = () => {
  return useQuery({
    queryKey: ["course-categories"],
    queryFn: getCoursesCategories,
  });
};

export const useGetCoursesData = (category: number, query: string) => {
  return useInfiniteQuery<CoursesData>({
    queryKey: ["courses-data", { category, query }],
    queryFn: ({ pageParam = 1 }) => getCoursesData(category, pageParam as number, query as string),
    getNextPageParam: (lastPage) => {
      return lastPage.has_next ? lastPage.current_page + 1 : undefined;
    },
    // Optional: keep previous data while fetching next page
    
    initialPageParam: 1,
  });
};





// User dashboard

export const useReferralsData = () => {
  return useQuery({
    queryKey: ["referrals"],
    queryFn: getReferralsData,
  });
};


export const useTasksData = () => {
  return useQuery({
    queryKey: ["tasks-data"],
    queryFn: getTasksData,
  });
};

export const useStoriesData = () => {
  return useQuery({
    queryKey: ["stories-data"],
    queryFn: getStoriesData,
  });
};

export const useGetStory = (id: number) => {
  return useQuery({
    queryKey: ["story", id],
    queryFn: () => getStory(id),
  });
};

export const useWalletData = () => {
  return useQuery({
    queryKey: ["wallet-data"],
    queryFn: getWalletData,
  });
};

export const useAccountOverviewData = () => {
  return useQuery({
    queryKey: ["account-overview"],
    queryFn: accountOverview,
  });
};

export const useRoadmapData = () => {
  return useQuery({
    queryKey: ["roadmap-data"],
    queryFn: roadmapData,
  });
};

export const useAnalyticsData = () => {
  return useQuery({
    queryKey: ["analytics-data"],
    queryFn: analyticsData,
  });
};





