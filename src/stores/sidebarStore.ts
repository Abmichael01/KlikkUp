import create from 'zustand';

type SidebarState = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: false,
  toggleSidebar: () =>
    set((state: SidebarState) => ({
      isOpen: !state.isOpen,
    })),
}));

