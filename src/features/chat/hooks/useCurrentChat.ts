import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { routes } from "@app/providers/router/routes";

import { useChatStore } from "@features/chat/store/chatStore";
import { useRequiredChatId } from "@features/user/hooks/useRequiredChatId";
import { ChatUser } from "@features/user/types/user.types";

import { usersApi } from "@shared/api/firestore/api/users.api";

export const useCurrentChat = () => {
  const { chatId } = useRequiredChatId();
  const navigate = useNavigate();

  const { chats, isInitialChatsLoading } = useChatStore();

  const chat = chats.find((c) => c.id === chatId) ?? null;

  useEffect(() => {
    if (!chatId) return;

    if (isInitialChatsLoading) return;

    if (!chat) {
      navigate(routes.chat, { replace: true });
    }
  }, [chatId, chat, isInitialChatsLoading, navigate]);

  return {
    chat,
    loading: isInitialChatsLoading,
  };
};

export const useNewChatUser = () => {
  const { newUserId } = useRequiredChatId();
  const navigate = useNavigate();

  const [user, setUser] = useState<ChatUser | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!newUserId) {
      setUser(null);
      return;
    }

    let cancelled = false;

    const loadUser = async () => {
      setLoading(true);
      setUser(null);

      try {
        const data = await usersApi.getById(newUserId);

        if (cancelled) return;

        if (!data) {
          navigate(routes.chat, { replace: true });
          return;
        }

        setUser(data);
      } catch {
        navigate(routes.chat, { replace: true });
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadUser();

    return () => {
      cancelled = true;
    };
  }, [newUserId, navigate]);

  return {
    user,
    loading,
  };
};
