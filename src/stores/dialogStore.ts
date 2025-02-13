import { create } from "zustand";

interface DialogStore {
  dialogs: Record<string, boolean>;
  setOpen: (key: string, state: boolean) => void;
}

export const useDialogStore = create<DialogStore>((set) => ({
  dialogs: {},

  setOpen: (key, state) =>
    set((prev) => ({ dialogs: { ...prev.dialogs, [key]: state } })),
}));

