import axios from "axios";
import { useAuthStore } from "@/stores/useAuthStore";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true, // ✅ Ensures cookies (access & refresh tokens) are sent
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000, // 30 seconds timeout for API requests
});

// Function to get CSRF token from cookies


// Refresh token function
const refreshAccessToken = async () => {
  const response = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/token/refresh/`,
    {},
    {
      withCredentials: true, // ✅ Ensure refresh request includes cookies
    }
  );
  return response.data; // New access token will be set in cookies
};

// Interceptor to handle 401 errors
apiClient.interceptors.response.use(
  (response) => response, // ✅ Pass successful responses
  async (error) => {
    const originalRequest = error.config;
    const authStore = useAuthStore.getState();

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // ✅ Prevent infinite loops

      try {
        await refreshAccessToken(); // ✅ Attempt to refresh the token
        return apiClient(originalRequest); // ✅ Retry the original request
      } catch {
        authStore.logout(); // ✅ Clear user data
        // window.location.href = "/auth/login"; // ✅ Redirect to login if needed
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
