import { useQuery } from "@tanstack/react-query";
import { getCoupons, getStories, getTasks, getUser } from "@/api/apiEndpoints";

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