import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { create } from "zustand";

import { db } from "@/lib/firebase";
import { ChatItem } from "@/types/chat.types";
import { ChatUser } from "@/types/user.types";
import { useUserStore } from "./userStore";

interface ChatImg {
  file: File | null;
  url: string;
}

interface ChatStore {
  chats: ChatItem[];
  chatId: string | null;
  user: ChatUser | null;
  img: ChatImg;
  isCurrentUserBlocked: boolean;
  isReceiverUserBlocked: boolean;
  isDetailOpen: boolean;
  isMarkedMessagesOpen: boolean;

  changeChat: (chatId: string, user: ChatUser) => void;
  toggleDetail: () => void;
  toggleMarkedMessages: () => void;
  changeBlock: () => void;
  changeImg: (img: ChatImg) => void;
  resetChat: () => void;
  resetImg: () => void;
  subscribeUserChats: (chatId: string) => void;
}

const initialStateFile: ChatImg = {
  file: null,
  url: "",
};

export const useChatStore = create<ChatStore>((set) => ({
  chats: [],
  chatId: null,
  user: null,
  img: initialStateFile,
  isCurrentUserBlocked: false,
  isReceiverUserBlocked: false,
  isDetailOpen: false,
  isMarkedMessagesOpen: false,
  changeChat: (chatId: string, user: ChatUser) => {
    const currentUser = useUserStore.getState().currentUser;

    if (!currentUser) return;

    if (user.blocked.includes(currentUser.id)) {
      return set({
        chatId: chatId,
        user: null,
        isCurrentUserBlocked: true,
        isReceiverUserBlocked: false,
      });
    } else if (currentUser.blocked.includes(user.id)) {
      return set({
        chatId: chatId,
        user: user,
        isCurrentUserBlocked: false,
        isReceiverUserBlocked: true,
      });
    } else {
      return set({
        chatId: chatId,
        user: user,
        isCurrentUserBlocked: false,
        isReceiverUserBlocked: false,
        isDetailOpen: false,
        isMarkedMessagesOpen: false,
      });
    }
  },
  toggleDetail: () => {
    set((state) => ({
      isDetailOpen: !state.isDetailOpen,
    }));
  },
  toggleMarkedMessages: () => {
    set((state) => ({
      isMarkedMessagesOpen: !state.isMarkedMessagesOpen,
    }));
  },
  changeBlock: () => {
    set((state) => ({
      isReceiverUserBlocked: !state.isReceiverUserBlocked,
    }));
  },

  changeImg: (img) => {
    set((state) => ({
      ...state,
      img,
    }));
  },

  subscribeUserChats: (userId) => {
    const unSub = onSnapshot(doc(db, "userchats", userId), async (res) => {
      const data = res.data();

      if (!data || !data.chats) {
        set({ chats: [] });
        return;
      }

      const items = data.chats as ChatItem[];

      const promises = items.map(async (item) => {
        if (!item.receiverId) return null;

        const userDocRef = doc(db, "users", item.receiverId);
        const userDocSnap = await getDoc(userDocRef);

        const user = userDocSnap.data();
        return { ...item, user };
      });

      const chatData = (await Promise.all(promises)).filter(
        (c): c is ChatItem => c !== null
      );

      set({
        chats: chatData.sort((a, b) => (b.updatedAt ?? 0) - (a.updatedAt ?? 0)),
      });
    });

    return unSub;
  },

  resetChat: () =>
    set({
      chatId: null,
      user: null,
      img: { file: null, url: "" },
      isCurrentUserBlocked: false,
      isReceiverUserBlocked: false,
      isDetailOpen: false,
      isMarkedMessagesOpen: false,
    }),

  resetImg: () => {
    set((state) => ({
      ...state,
      img: initialStateFile,
    }));
  },
}));
