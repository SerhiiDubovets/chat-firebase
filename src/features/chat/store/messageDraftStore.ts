import { create } from "zustand";

import { ChatUser } from "@features/user/types/user.types";

interface DraftImage {
  file: File | null;
  url: string;
}

interface MessageDraftStore {
  text: string;
  image: DraftImage;
  chatUser: ChatUser | null;

  setText: (text: string) => void;
  setImage: (image: DraftImage) => void;
  setChatUser: (chatUser: ChatUser | null) => void;

  clearChatUser: () => void;
  clearImage: () => void;
  clear: () => void;
}

const initialImage: DraftImage = {
  file: null,
  url: "",
};

export const useMessageDraftStore = create<MessageDraftStore>((set) => ({
  text: "",
  image: initialImage,
  chatUser: null,

  setText: (text) => set({ text }),
  setImage: (image) => set({ image }),
  setChatUser: (chatUser) => set({ chatUser }),

  clearImage: () => set({ image: initialImage }),
  clearChatUser: () => set({ chatUser: null }),
  clear: () => set({ text: "", image: initialImage, chatUser: null }),
}));
