import { create } from "zustand";

import { getUserById } from "@/lib/users";
import { ChatUser } from "@/types/user.types";
import { useChatStore } from "./chatStore";

const initialState = {
  currentUser: null,
  userId: null,
  isLoading: true,
  userLoading: false,
};

const resetState = {
  currentUser: null,
  userId: null,
  isLoading: false,
  userLoading: false,
};

export interface UserStore {
  currentUser: ChatUser | null;
  userId: string | null;
  isLoading: boolean;
  userLoading: boolean;
  fetchUserInfo: (uid: string | null) => Promise<void>;
  changeCurrentUser: (userId: string | null) => Promise<ChatUser | null>;
  setCurrentUser: (newUser: ChatUser | null) => void;
  resetUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  ...initialState,
  fetchUserInfo: async (uid) => {
    if (!uid) return set(resetState);

    try {
      set({ userLoading: true });
      const userData = await getUserById(uid);

      if (userData) {
        set({
          currentUser: userData,
          userId: uid,
          isLoading: false,
          userLoading: false,
        });
      } else {
        set(resetState);
      }
    } catch (err) {
      console.log(err);
      return set(resetState);
    }
  },

  changeCurrentUser: async (userId) => {
    set({ isLoading: true });

    if (!userId) {
      set(resetState);
      return null;
    }

    try {
      const userData = await getUserById(userId);

      if (userData) {
        set({
          currentUser: userData,
          userId: userId,
          isLoading: false,
        });
        return userData;
      } else {
        set(resetState);
        return null;
      }
    } catch (err) {
      console.log(err);
      set({
        currentUser: null,
        userId: null,
        isLoading: false,
        userLoading: false,
      });
      return null;
    }
  },

  setCurrentUser: (newUser) =>
    set({ currentUser: newUser, userId: newUser ? newUser.id : null }),

  resetUser: () => {
    set(initialState);
    useChatStore.getState().resetChat();
  },
}));
