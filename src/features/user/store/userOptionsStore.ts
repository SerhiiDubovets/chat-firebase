import { create } from "zustand";

interface UserOptionsState {
  isOpen: boolean;
  openUserOptions: () => void;
  closeUserOptions: () => void;
}

export const useUserOptionsStore = create<UserOptionsState>((set) => ({
  isOpen: false,
  openUserOptions: () => set({ isOpen: true }),
  closeUserOptions: () => set({ isOpen: false }),
}));
