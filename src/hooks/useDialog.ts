import { useDialogStore } from "@/stores/dialogStore";

export const useDialog = (key: string) => {
  const { dialogs, setOpen } = useDialogStore();
  return {
    open: dialogs[key] || false,
    setOpen: (state: boolean) => setOpen(key, state),
  };
};
