import { useMutation } from "@tanstack/react-query";
import {
  addStory,
  addTask,
  buyCoupon,
  checkin,
  confirmStory,
  confirmTask,
  deleteStory,
  deleteTask,
  deleteUser,
  generateCoupon,
  login,
  logout,
  register,
  sendOtp,
  updateBankDetails,
  updateStory,
  updateTask,
  updateUser,
  withdraw,
} from "@/api/apiEndpoints";
import {
  BankDetails,
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
