import { create } from "zustand";
import { persist } from "zustand/middleware";
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

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
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
        set({ isLoading: true });
        try {
          const response = await getUser();
          set({
            user: response,
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
    }),
    {
      name: "auth-store", // key in localStorage
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
