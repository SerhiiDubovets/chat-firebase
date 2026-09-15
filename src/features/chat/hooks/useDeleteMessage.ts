import { useState } from "react";

import { messageService } from "@features/chat/services/message.service";

import { handleApiError } from "@shared/lib/apiErrorHandler";
import { toastService } from "@shared/services/toastService";

type DeleteForMeParams = {
  chatId: string;
  messageId: string;
  userId: string;
};
type DeleteForEveryoneParams = {
  chatId: string;
  messageId: string;
};

export const useDeleteMessage = () => {
  const [loading, setLoading] = useState(false);

  const deleteForMe = async ({
    chatId,
    messageId,
    userId,
  }: DeleteForMeParams) => {
    setLoading(true);

    try {
      await messageService.deleteForMe(chatId, messageId, userId);
      toastService.success("Message deleted");
    } catch (e) {
      handleApiError(e);
    } finally {
      setLoading(false);
    }
  };

  const deleteForEveryone = async ({
    chatId,
    messageId,
  }: DeleteForEveryoneParams) => {
    setLoading(true);

    try {
      await messageService.deleteForEveryone(chatId, messageId);
      toastService.success("Message deleted for everyone");
    } catch (e) {
      handleApiError(e);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    deleteForMe,
    deleteForEveryone,
  };
};
