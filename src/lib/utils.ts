import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getSubdomain = (): string | null => {
  const hostname = window.location.hostname;

  const parts = hostname.split('.');
  if (parts.length > 2) {
    return parts[0]; // e.g. admin.klikkup.com => 'admin'
  }

  return null;
};

