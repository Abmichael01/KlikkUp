import { create } from 'zustand'
import { isMobileOnly } from "react-device-detect";

type SidebarStore = {
  isOpen: boolean
  toggle: () => void
  close: () => void
}

const isOpenVal = isMobileOnly ? false : true;

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen:  isOpenVal,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false }),
}))