import { create } from "zustand";
import { WalletDetails } from "@/types";

interface WalletStore {
  walletDetails: WalletDetails;
  setWalletDetails: (details: WalletDetails) => void;
  clearWalletDetails: () => void;
}

export const useWalletStore = create<WalletStore>((set) => ({
  walletDetails: {} as WalletDetails,
  setWalletDetails: (details) => set({ walletDetails: details }),
  clearWalletDetails: () => set({ walletDetails: {} as WalletDetails }),
}));