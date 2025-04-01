import { create } from "zustand";

interface ShareDialogState {
  isOpen: boolean;
  textToShare: string;
  openDialog: (text: string) => void;
  closeDialog: () => void;
}

export const useShareDialogStore = create<ShareDialogState>((set) => ({
  isOpen: false,
  textToShare: "",
  openDialog: (text) => set({ isOpen: true, textToShare: text }),
  closeDialog: () => set({ isOpen: false, textToShare: "" }),
}));
