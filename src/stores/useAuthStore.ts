import { create } from "zustand";
import type { User } from "@/types";
import { getUser } from "@/api/apiEndpoints";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: true,
      isLoading: false,
    }),

  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    }),

  checkAuth: async () => {
    set({ isLoading: true }); // Set loading state
    try {
      const response = await getUser(); // Call the getUser function
      set({
        user: response, // Assuming getUser returns the user object
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      console.error("Authentication check failed:", error);
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
    }
  },
}));
