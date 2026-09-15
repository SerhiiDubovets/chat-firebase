import { useParams } from "react-router-dom";

export const useRequiredChatId = () => {
  const { chatId, userId } = useParams<{
    chatId?: string;
    userId?: string;
  }>();

  return {
    chatId: chatId ?? null,
    newUserId: userId ?? null,
    isNewChat: !!userId,
  };
};
