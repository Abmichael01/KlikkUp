import { useMutation } from "@tanstack/react-query";
import { addStory, addTask, deleteStory, deleteTask, generateCoupon, login, logout, register, updateStory, updateTask } from "@/api/apiEndpoints";
import { LoginData, RegisterData, Story, Task } from "@/types";


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
    mutationFn: (amount: number) =>  generateCoupon(amount),
  });
};

export const useAddTask = () => {
  return useMutation({
    mutationFn: (data: Task) =>  addTask(data),
  });
};

export const useUpdateTask = () => {
  return useMutation({
    mutationFn: (data: Task) =>  updateTask(data),
  });
};

export const useDeleteTask = () => {
  // Implement deleteTask mutation
  return useMutation({
    mutationFn: (id: number) =>  deleteTask(id),
  });
}
export const useAddStory = () => {
  return useMutation({
    mutationFn: (data: Story) =>  addStory(data),
  });
};

export const useUpdateStory = () => {
  return useMutation({
    mutationFn: (data: Story) =>  updateStory(data),
  });
};

export const useDeleteStory = () => {
  // Implement deleteTask mutation
  return useMutation({
    mutationFn: (id: number) =>  deleteStory(id),
  });
}




