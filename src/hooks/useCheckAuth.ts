import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/api/apiEndpoints";
import { useAuthStore } from "@/stores/useAuthStore";
import type { User } from "@/types";

export const useCheckAuth = () => {
    const setUser = useAuthStore((state) => state.setUser);

    const { data: user, isLoading, isError } = useQuery<User, Error>({
        queryKey: ["authUser"],
        queryFn: getUser,
        retry: false, // Prevent unnecessary retries
    });

    useEffect(() => {
        if (user) {
            setUser(user);
        } else if (isError) {
            setUser(null);
        }
    }, [user, isError, setUser]);

    return { user, isLoading, isAuthenticated: !!user, isError };
};
