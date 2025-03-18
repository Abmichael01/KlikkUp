import { create } from "zustand";

type AnnouncementState = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export const useAnnouncementStore = create<AnnouncementState>((set) => ({
  isOpen: true,
  setIsOpen: (open) => set({ isOpen: open }),
}));
