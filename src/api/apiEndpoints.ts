import { Coupon, LoginData, RegisterData, Story, Task, User } from "@/types";
import apiClient from "./apiClient";
import axios from  "axios"

// Authentication Endpoints
export const register = async (credentials: RegisterData) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/register/`, credentials);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error; // Rethrow to handle in calling function
  }
};


export const login = async (credentials: LoginData) => {
  try {
    const response = await apiClient.post(`/login/`, credentials);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error; // Rethrow to handle in calling function
  }
};

export const logout = async () => {
  try {
    const response = await apiClient.post("/logout/");
    return response.data;
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
};

export const getUser = async () => {
  try {
    const response = await apiClient.get("/users/me/");
    return response.data as User;
  } catch (error) {
    console.error("Fetching user failed:", error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await apiClient.get("/users/");
    return response.data as User[];
  } catch (error) {
    console.error("Fetching users failed:", error);
    throw error;
  }
};

export const updateUser = async (data: User) => {
  try {
    const response = await apiClient.patch(`/users/${data.id}/update/`, data);
    return response.data as User;
  } catch (error) {
    console.error("Update user failed:", error);
    throw error;
  }
};

export const deleteUser = async (id: number) => {
  try {
    const response = await apiClient.delete(`/users/${id}/delete/`);
    return response.data;
  } catch (error) {
    console.error("Delete user failed:", error);
    throw error;
  }
};

export const generateCoupon = async (amount: number) => {
  try {
    const response = await apiClient.post("/coupons/", {amount});
    return response.data;
  } catch (error) {
    console.error("Coupon generation Failed", error);
    throw error;
  }
};

export const getCoupons = async () => {
  try {
    const response = await apiClient.get("/coupons/");
    return response.data as Coupon[];
  } catch (error) {
    console.error("Coupon Fetach failed", error);
    throw error;
  }
};

export const addTask = async (data: Task) => {
  try {
    const response = await apiClient.post("/task/", data);
    return response.data;
  } catch (error) {
    console.error("Error Adding task", error);
    throw error;
  }
};

export const getTasks = async () => {
  try {
    const response = await apiClient.get("/task/");
    return response.data;
  } catch (error) {
    console.error("Error Fetching tasks", error);
    throw error;
  }
};

export const updateTask = async (data: Task) => {
  try {
    const response = await apiClient.put(`/task/${data.id}/`, data);
    return response.data;
  } catch (error) {
    console.error("Error Updating tasks", error);
    throw error;
  }
};

export const deleteTask = async (id: Task["id"]) => {
  try {
    const response = await apiClient.delete(`/task/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Error Deleting tasks", error);
    throw error;
  }
};



export const addStory = async (data: Story) => {
  try {
    const response = await apiClient.post("/story/", data);
    return response.data;
  } catch (error) {
    console.error("Error Adding task", error);
    throw error;
  }
};

export const getStories= async () => {
  try {
    const response = await apiClient.get("/story/");
    return response.data;
  } catch (error) {
    console.error("Error Fetching tasks", error);
    throw error;
  }
};

export const updateStory = async (data: Story) => {
  try {
    const response = await apiClient.put(`/story/${data.id}/`, data);
    return response.data;
  } catch (error) {
    console.error("Error Updating tasks", error);
    throw error;
  }
};

export const deleteStory = async (id: Story["id"]) => {
  try {
    const response = await apiClient.delete(`/story/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Error Deleting tasks", error);
    throw error;
  }
};
