import {AccountOverviewData, AnalyticsData, BankDetails, Coupon, Course, CourseCategory, LoginData, PaymentData, ReferralsData, RegisterData, RoadmapData, StoriesData, Story, Task, TasksData, User, WalletDetails, WithdrawalData} from "@/types";
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


export const getAllCourses = async (): Promise<Course[]> => {
  try {
    const response = await apiClient.get("/courses/");
    return response.data;
  } catch (error) {
    console.error("Error fetching courses", error);
    throw error;
  }
};

// Fetch a single course by ID
export const getCourseById = async (id: number): Promise<Course> => {
  try {
    const response = await apiClient.get(`/courses/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching course with ID ${id}`, error);
    throw error;
  }
};

// Add a new course
export const addCourse = async (courseData: Course): Promise<Course> => {
  try {
    const response = await apiClient.post("/courses/", courseData);
    return response.data;
  } catch (error) {
    console.error("Error adding course", error);
    throw error;
  }
};

// Update an existing course
export const updateCourse = async (
  courseData: Course
): Promise<Course> => {
  try {
    const response = await apiClient.put(`/courses/${courseData.id}/`, courseData);
    return response.data;        
  } catch (error) {
    console.error(`Error updating course with ID ${courseData.id}`, error);
    throw error;
  }
};

// Delete a course
export const deleteCourse = async (id: number): Promise<void> => {
  try {
    await apiClient.delete(`/courses/${id}/`);
  } catch (error) {
    console.error(`Error deleting course with ID ${id}`, error);
    throw error;
  }
};

export const addCourseCategory = async (data: CourseCategory): Promise<CourseCategory> => {
  try {
    const response = await apiClient.post("/course-categories/", data);
    return response.data;
  } catch (error) {
    console.error("Error adding category", error);
    throw error;
  }
};

export const getCoursesCategories = async () => {
  try {
    const response = await apiClient.get(`/course-categories/`);
    return response.data as CourseCategory[];
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};

export const updateCourseCategory = async (data: CourseCategory) => {
  try {
    const response = await apiClient.put(`/course-categories/${data.id}/`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating category", error);
    throw error;
  }
};

export const deleteCourseCategory = async (id: number) => {
  try {
    const response = await apiClient.delete(`/course-categories/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Error deleting category", error);
    throw error;
  }
};






// User dashboard 

export const getReferralsData = async () => {
  try {
    const response = await apiClient.get(`/users/referrals/`);
    return response.data as ReferralsData;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};

export const getTasksData = async () => {
  try {
    const response = await apiClient.get(`/users/tasks/`);
    return response.data as TasksData;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};

export const confirmTask = async (data: Task) => {
  try {
    const response = await apiClient.post(`/users/confirm-task/`, data);
    return response.data;
  } catch (error) {
    console.error("Error confirming tasks", error);
    throw error;
  }
};

export const getStoriesData = async () => {
  try {
    const response = await apiClient.get(`/users/stories/`);
    return response.data as StoriesData;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};

export const getStory = async (id: number) => {
  try {
    const response = await apiClient.get(`/users/story/${id}/`);
    return response.data as Story;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};

export const confirmStory = async (data: Story) => {
  try {
    const response = await apiClient.post(`/users/confirm-story/`, data);
    return response.data;
  } catch (error) {
    console.error("Error confirming story", error);
    throw error;
  }
};


// wallets

export const getWalletData = async () => {
  try {
    const response = await apiClient.get("/wallet/");
    return response.data as WalletDetails;
  } catch (error) {
    console.error("Error fetching wallet data", error);
    throw error;
  }
};

export const updateBankDetails = async (data: BankDetails) => {
  try {
    const response = await apiClient.put("/wallet/bank-details/", data);
    return response.data;
  } catch (error) {
    console.error("Error fetching wallet data", error);
    throw error;
  }
};

export const buyCoupon = async (data: PaymentData) => {
  try {
    const response = await apiClient.post("/buy-coupon/", data);
    return response.data;
  } catch (error) {
    console.error("Error initializing payment", error);
    throw error;
  }
};

export const accountOverview = async () => {
  try {
    const response = await apiClient.get("/users/account-overview/");
    return response.data as AccountOverviewData;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};

export const checkin = async () => {
  try {
    const response = await apiClient.post("/daily-checkin/");
    return response.data;
  } catch (error) {
    console.error("Error checking in", error);
    throw error;
  }
};

export const roadmapData = async () => {
  try {
    const response = await apiClient.get("/roadmap/");
    return response.data as RoadmapData;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};

export const withdraw = async (data: WithdrawalData) => {
  try {
    const response = await apiClient.post("/wallet/withdraw/", data );
    return response.data;
  } catch (error) {
    console.error("Error withdrawing", error);
    throw error;
  }
};

export const sendOtp = async () => {
  try {
    const response = await apiClient.post("/users/send-otp/");
    return response.data;
  } catch (error) {
    console.error("Error sending otp", error);
    throw error;
  }
};


export const analyticsData = async () => {
  try {
    const response = await apiClient.get("/admin/analytics-data/");
    return response.data as AnalyticsData;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};


