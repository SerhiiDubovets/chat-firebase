import { useEffect, useState } from "react";

import { Message } from "@features/chat/types/message.types";

import { messagesApi } from "@shared/api/firestore/api/messages.api";

type UseMessagesParams = {
  chatId: string | null;
  userId: string | null;
};

export const useMessages = ({ chatId, userId }: UseMessagesParams) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    if (!chatId) {
      setMessages([]);
      setLoading(false);
      return;
    }

    const unsub = messagesApi.subscribe(chatId, (messages) => {
      if (!userId) {
        setMessages(messages);
        setLoading(false);
        return;
      }
      const visibleMessages = messages.filter(
        (message) => !message.deletedFor.includes(userId),
      );
      setMessages(visibleMessages);
      setLoading(false);
    });

    return () => unsub();
  }, [chatId, userId]);

  return { messages, loading };
};
