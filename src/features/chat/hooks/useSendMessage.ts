import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { routes } from "@app/providers/router/routes";

import { messageService, privateChatService } from "@features/chat/services";
import { useMessageDraftStore } from "@features/chat/store/messageDraftStore";
import { useRequiredChatId } from "@features/user/hooks/useRequiredChatId";
import { useUserStore } from "@features/user/store/userStore";
import { ChatUser } from "@features/user/types/user.types";

import { isMessageEmpty } from "@shared/helpers/messages/isMessageEmpty";
import { isMessageTooLong } from "@shared/helpers/messages/isMessageTooLong";
import { messageImageService } from "@shared/services/messageImage.service";
import { MessageImage } from "@shared/types/common.types";

type SendMessageParams = {
  text: string;
  chatUser: ChatUser | null;
  clearDraft: () => void;
  onError?: (msg: string) => void;
  clearSearch: () => void;
};

type SendMessageResult = {
  success: boolean;
};

export function useSendMessage() {
  const { image, clear } = useMessageDraftStore();
  const { currentUser } = useUserStore();
  const { chatId } = useRequiredChatId();
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();

  const sendMessage = async ({
    text,
    chatUser,
    onError,
    clearDraft,
    clearSearch,
  }: SendMessageParams): Promise<SendMessageResult> => {
    if (isMessageEmpty(text, image.file)) {
      return { success: false };
    }

    if (isMessageTooLong(text)) {
      onError?.("Message is too long");
      return { success: false };
    }

    if (!chatId && !chatUser) {
      return { success: false };
    }

    if (!currentUser) {
      return { success: false };
    }
    setIsSending(true);
    try {
      let currentChatId = chatId;

      if (!currentChatId) {
        if (!chatUser) {
          return { success: false };
        }

        currentChatId = await privateChatService.getOrCreatePrivateChat(
          currentUser,
          chatUser,
        );
      }

      let img: MessageImage | undefined;

      if (image.file)
        img = await messageImageService.upload(currentChatId, image.file);

      await messageService.send({
        currentUserId: currentUser.id,
        chatId: currentChatId,
        text,
        image: img,
      });

      if (!chatId) {
        navigate(routes.chatById(currentChatId), { replace: true });
      }

      clearDraft();
      clear();
      clearSearch();

      return { success: true };
    } catch (err) {
      console.error("Error sending message:", err);
      onError?.("Message not sent");

      return { success: false };
    } finally {
      setIsSending(false);
    }
  };

  return { sendMessage, isSending };
}
