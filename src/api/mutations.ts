import { useMutation } from "@tanstack/react-query";
import {
  addAnnouncement,
  addCourse,
  addCourseCategory,
  addGiveaway,
  addStory,
  addTask,
  buyCoupon,
  changePassword,
  checkin,
  confirmStory,
  confirmTask,
  deleteAnnouncement,
  deleteCourse,
  deleteCourseCategory,
  deleteGiveaway,
  deleteStory,
  deleteTask,
  deleteUser,
  generateCoupon,
  joinGiveaway,
  login,
  logout,
  register,
  sendOtp,
  updateAnnouncement,
  updateBankDetails,
  updateCourse,
  updateCourseCategory,
  updateGiveaway,
  updateStory,
  updateTask,
  updateUser,
  withdraw,
} from "@/api/apiEndpoints";
import {
  Announcement,
  BankDetails,
  ChangePasswordData,
  Course,
  Giveaway,
  LoginData,
  PaymentData,
  RegisterData,
  Story,
  Task,
  User,
  WithdrawalData,
} from "@/types";

// Login Mutation
export const useRegister = () => {
  return useMutation({
    mutationFn: (data: RegisterData) => register(data),
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: LoginData) => login(data),
  });
};

// Logout Mutation
export const useLogout = () => {
  return useMutation({
    mutationFn: logout,
  });
};

export const useGenerateCoupon = () => {
  return useMutation({
    mutationFn: (amount: number) => generateCoupon(amount),
  });
};

export const useAddTask = () => {
  return useMutation({
    mutationFn: (data: Task) => addTask(data),
  });
};

export const useUpdateTask = () => {
  return useMutation({
    mutationFn: (data: Task) => updateTask(data),
  });
};

export const useDeleteTask = () => {
  // Implement deleteTask mutation
  return useMutation({
    mutationFn: (id: number) => deleteTask(id),
  });
};
export const useAddStory = () => {
  return useMutation({
    mutationFn: (data: Story) => addStory(data),
  });
};

export const useUpdateStory = () => {
  return useMutation({
    mutationFn: (data: Story) => updateStory(data),
  });
};

export const useDeleteStory = () => {
  // Implement deleteTask mutation
  return useMutation({
    mutationFn: (id: number) => deleteStory(id),
  });
};

export const useAddUser = () => {
  return useMutation({
    mutationFn: (data: Story) => addStory(data),
  });
};

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: (data: User) => updateUser(data),
  });
};

export const useDeleteUser = () => {
  // Implement deleteTask mutation
  return useMutation({
    mutationFn: (id: number) => deleteUser(id),
  });
};

export const useConfirmTask = () => {
  // Implement deleteTask mutation
  return useMutation({
    mutationFn: (data: Task) => confirmTask(data),
  });
};

export const useConfirmStory = () => {
  // Implement deleteTask mutation
  return useMutation({
    mutationFn: (data: Story) => confirmStory(data),
  });
};

export const useUpdateBankDetails = () => {
  // Implement deleteTask mutation
  return useMutation({
    mutationFn: (data: BankDetails) => updateBankDetails(data),
  });
};

export const useBuyCoupon = () => {
  // Implement deleteTask mutation
  return useMutation({
    mutationFn: (data: PaymentData) => buyCoupon(data),
  });
};

export const useCheckIn = () => {
  // Implement deleteTask mutation
  return useMutation({
    mutationFn: checkin,
  });
};

export const useWithdraw = () => {
  return useMutation({
    mutationFn: (data: WithdrawalData) => withdraw(data),
  });
};

export const useSendOtp = () => {
  return useMutation({
    mutationFn: sendOtp,
  });
};
export const useAddCourse = () => {
  return useMutation({
    mutationFn: addCourse,
  });
};

export const useUpdateCourse = () => {
  return useMutation({
    mutationFn: (data: Course) => updateCourse(data),
  });
};

export const useDeleteCourse = () => {
  return useMutation({
    mutationFn: (id: number) => deleteCourse(id),
  });
};

export const useAddCourseCategory = () => {
  return useMutation({
    mutationFn: addCourseCategory,
  });
};

export const useUpdateCourseCategory = () => {
  return useMutation({
    mutationFn: updateCourseCategory,
  });
};
 
export const useDeleteCourseCategory = () => {
  return useMutation({
    mutationFn: (id: number) => deleteCourseCategory(id),
  });
};

export const useChangePassword = () => {
  return useMutation({
    mutationFn: (data: ChangePasswordData) => changePassword(data)
  });
}

export const useAddAnnouncement = () => {
  return useMutation({
    mutationFn: (data: Partial<Announcement>) => addAnnouncement(data),
  });
};

export const useUpdateAnnouncement = () => {
  return useMutation({
    mutationFn: (data: Partial<Announcement>) => updateAnnouncement(data),
  });
};

export const useDeleteAnnouncement = () => {
  return useMutation({
    mutationFn: (id: number) => deleteAnnouncement(id),
  });
};

export const useAddGiveaway = () => {
  return useMutation({
    mutationFn: (data: Partial<Giveaway>) => addGiveaway(data),
  });
};

export const useUpdateGiveaway = () => {
  return useMutation({
    mutationFn: (data: Partial<Giveaway>) => updateGiveaway(data),
  });
};

export const useDeleteGiveaway = () => {
  return useMutation({
    mutationFn: (id: number) => deleteGiveaway(id),
  });
};

export const useJoinGiveaway = () => {
  return useMutation({
    mutationFn: joinGiveaway,
  });
};
 

