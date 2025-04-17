import { useQuery } from "@tanstack/react-query";
import {accountOverview, getCoupons, getReferralsData, getStories, getStoriesData, getStory, getTasks, getTasksData, getUser, getUsers, getWalletData} from "@/api/apiEndpoints";

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
    queryKey: ["story"],
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



