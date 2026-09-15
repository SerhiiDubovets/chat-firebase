import { create } from "zustand";

import { ChatItem } from "@features/chat/types/chat.types";
import { useUserStore } from "@features/user/store/userStore";
import { ChatUser } from "@features/user/types/user.types";

interface ChatStore {
  chats: ChatItem[];
  chatId: string | null;
  user: ChatUser | null;
  isCurrentUserBlocked: boolean;
  isReceiverUserBlocked: boolean;
  isDetailOpen: boolean;
  isMarkedMessagesOpen: boolean;
  isInitialChatsLoading: boolean;

  changeChat: (chatId: string, user: ChatUser) => void;
  toggleDetail: () => void;
  toggleMarkedMessages: () => void;
  changeBlock: () => void;
  resetChat: () => void;
  // subscribeUserChats: (chatId: string) => void;
  setChats: (chats: ChatItem[]) => void;
  setInitialChatsLoading: (loading: boolean) => void;
  setChatId: (chatId: string) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  chats: [],
  chatId: null,
  user: null,
  isCurrentUserBlocked: false,
  isReceiverUserBlocked: false,
  isDetailOpen: false,
  isMarkedMessagesOpen: false,
  isInitialChatsLoading: true,

  setChatId: (chatId) => set({ chatId }),

  changeChat: (chatId: string, user: ChatUser) => {
    const currentUser = useUserStore.getState().currentUser;

    if (!currentUser) return;

    if (user.blocked.includes(currentUser.id)) {
      set({
        chatId,
        user: null,
        isCurrentUserBlocked: true,
        isReceiverUserBlocked: false,
      });

      return;
    }

    if (currentUser.blocked.includes(user.id)) {
      set({
        chatId,
        user,
        isCurrentUserBlocked: false,
        isReceiverUserBlocked: true,
      });

      return;
    }

    set({
      chatId,
      user,
      isCurrentUserBlocked: false,
      isReceiverUserBlocked: false,
      isDetailOpen: false,
      isMarkedMessagesOpen: false,
    });
  },

  setInitialChatsLoading: (loading) => set({ isInitialChatsLoading: loading }),

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

  setChats: (chats) => set({ chats }),

  // subscribeUserChats: (userId) => {
  //   const q = query(
  //     collection(db, "chats"),
  //     where("participants", "array-contains", userId),
  //     orderBy("lastMessageAt", "desc"),
  //   );

  //   const unSub = onSnapshot(q, async (snapshot) => {
  //     const chats = await Promise.all(
  //       snapshot.docs.map(async (docSnap) => {
  //         const data = docSnap.data();

  //         const otherUserId = data.participants.find(
  //           (id: string) => id !== userId,
  //         );

  //         if (!otherUserId) return null;

  //         const userDoc = await getDoc(doc(db, "users", otherUserId));
  //         const user = userDoc.data();

  //         return {
  //           id: docSnap.id,
  //           ...data,
  //           user,
  //         };
  //       }),
  //     );

  //     set({
  //       chats: chats.filter(Boolean),
  //     });
  //   });

  //   return unSub;
  // },

  resetChat: () =>
    set({
      chatId: null,
      user: null,
      isCurrentUserBlocked: false,
      isReceiverUserBlocked: false,
      isDetailOpen: false,
      isMarkedMessagesOpen: false,
    }),
}));

// import { doc, getDoc, onSnapshot } from "firebase/firestore";
// import { create } from "zustand";

// import { ChatItem } from "@features/chat/types/chat.types";
// import { useUserStore } from "@features/user/store/userStore";
// import { ChatUser } from "@features/user/types/user.types";

// import { db } from "@shared/lib/firebase";

// interface ChatImg {
//   file: File | null;
//   url: string;
// }

// interface ChatStore {
//   chats: ChatItem[];
//   chatId: string | null;
//   user: ChatUser | null;
//   img: ChatImg;
//   isCurrentUserBlocked: boolean;
//   isReceiverUserBlocked: boolean;
//   isDetailOpen: boolean;
//   isMarkedMessagesOpen: boolean;

//   changeChat: (chatId: string, user: ChatUser) => void;
//   toggleDetail: () => void;
//   toggleMarkedMessages: () => void;
//   changeBlock: () => void;
//   changeImg: (img: ChatImg) => void;
//   resetChat: () => void;
//   resetImg: () => void;
//   subscribeUserChats: (chatId: string) => void;
// }

// const initialStateFile: ChatImg = {
//   file: null,
//   url: "",
// };

// export const useChatStore = create<ChatStore>((set) => ({
//   chats: [],
//   chatId: null,
//   user: null,
//   img: initialStateFile,
//   isCurrentUserBlocked: false,
//   isReceiverUserBlocked: false,
//   isDetailOpen: false,
//   isMarkedMessagesOpen: false,
//   changeChat: (chatId: string, user: ChatUser) => {
//     const currentUser = useUserStore.getState().currentUser;

//     if (!currentUser) return;

//     if (user.blocked.includes(currentUser.id)) {
//       return set({
//         chatId: chatId,
//         user: null,
//         isCurrentUserBlocked: true,
//         isReceiverUserBlocked: false,
//       });
//     } else if (currentUser.blocked.includes(user.id)) {
//       return set({
//         chatId: chatId,
//         user: user,
//         isCurrentUserBlocked: false,
//         isReceiverUserBlocked: true,
//       });
//     } else {
//       return set({
//         chatId: chatId,
//         user: user,
//         isCurrentUserBlocked: false,
//         isReceiverUserBlocked: false,
//         isDetailOpen: false,
//         isMarkedMessagesOpen: false,
//       });
//     }
//   },
//   toggleDetail: () => {
//     set((state) => ({
//       isDetailOpen: !state.isDetailOpen,
//     }));
//   },
//   toggleMarkedMessages: () => {
//     set((state) => ({
//       isMarkedMessagesOpen: !state.isMarkedMessagesOpen,
//     }));
//   },
//   changeBlock: () => {
//     set((state) => ({
//       isReceiverUserBlocked: !state.isReceiverUserBlocked,
//     }));
//   },

//   changeImg: (img) => {
//     set((state) => ({
//       ...state,
//       img,
//     }));
//   },

//   subscribeUserChats: (userId) => {
//     const unSub = onSnapshot(doc(db, "userchats", userId), async (res) => {
//       const data = res.data();

//       if (!data || !data.chats) {
//         set({ chats: [] });
//         return;
//       }

//       const items = data.chats as ChatItem[];

//       const promises = items.map(async (item) => {
//         if (!item.receiverId) return null;

//         const userDocRef = doc(db, "users", item.receiverId);
//         const userDocSnap = await getDoc(userDocRef);

//         const user = userDocSnap.data();
//         return { ...item, user };
//       });

//       const chatData = (await Promise.all(promises)).filter(
//         (c): c is ChatItem => c !== null
//       );

//       set({
//         chats: chatData.sort((a, b) => (b.updatedAt ?? 0) - (a.updatedAt ?? 0)),
//       });
//     });

//     return unSub;
//   },

//   resetChat: () =>
//     set({
//       chatId: null,
//       user: null,
//       img: { file: null, url: "" },
//       isCurrentUserBlocked: false,
//       isReceiverUserBlocked: false,
//       isDetailOpen: false,
//       isMarkedMessagesOpen: false,
//     }),

//   resetImg: () => {
//     set((state) => ({
//       ...state,
//       img: initialStateFile,
//     }));
//   },
// }));
