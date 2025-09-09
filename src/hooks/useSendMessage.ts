import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { isMessageEmpty } from "@/helpers/isMessageEmpty";
import { db } from "@/lib/firebase";
import upload from "@/lib/upload";
import { useChatStore } from "@/store/chatStore";
import { useUserStore } from "@/store/userStore";

export function useSendMessage() {
  const { chatId, user, img, resetImg } = useChatStore();
  const { currentUser } = useUserStore();

  const sendMessage = async (message: string, resetForm: () => void) => {
    if (!chatId || (!message.trim() && !img.file)) return;

    if (isMessageEmpty(message, img.file)) {
      resetForm();
      return;
    }

    let imgUrl: string | null = null;

    resetForm();
    try {
      if (img.file) {
        imgUrl = await upload(img.file);
      }

      await addDoc(collection(db, "chats", chatId, "messages"), {
        senderId: currentUser?.id,
        text: message,
        createdAt: serverTimestamp(),
        ...(imgUrl && { img: imgUrl }),
      });

      const userIds = [currentUser?.id, user?.id];

      for (const id of userIds) {
        if (!id) return;
        const userChatsRef = doc(db, "userchats", id);
        const userChatsSnapshot = await getDoc(userChatsRef);
        if (userChatsSnapshot.exists()) {
          const userChatsData = userChatsSnapshot.data();
          const chatIndex = userChatsData.chats.findIndex(
            (c: any) => c.chatId === chatId
          );
          if (chatIndex > -1) {
            const updatedChats = userChatsData.chats.map(
              (chat: any, i: number) =>
                i === chatIndex
                  ? {
                      ...chat,
                      lastMessage: message,
                      isSeen: id === currentUser?.id,
                      updateAt: Date.now(),
                    }
                  : chat
            );
            await updateDoc(userChatsRef, { chats: updatedChats });
          }
        }
      }
      resetForm();
      resetImg();
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return { sendMessage };
}
