import { useEffect, useRef } from "react";

import { UseFormReset } from "react-hook-form";

import { draftService } from "@features/chat/services";
import { useUserStore } from "@features/user/store/userStore";

import { useDebounce } from "@shared/hooks/useDebounce";
import { SendInputMessage } from "@shared/types/common.types";

export const useChatDraft = (
  chatId: string | null,
  text: string,
  reset: UseFormReset<SendInputMessage>,
) => {
  const { currentUser } = useUserStore();

  const debouncedText = useDebounce(text, 500);

  const isDraftLoaded = useRef(false);
  const skipNextSave = useRef(false);

  useEffect(() => {
    if (!currentUser || !chatId) return;

    isDraftLoaded.current = false;

    const loadDraft = async () => {
      const draft = await draftService.get(currentUser.id, chatId);

      reset({
        text: draft?.text ?? "",
      });

      isDraftLoaded.current = true;
    };

    loadDraft();
  }, [currentUser, chatId, reset]);

  useEffect(() => {
    if (!currentUser || !chatId || !isDraftLoaded.current) {
      return;
    }

    if (skipNextSave.current) {
      skipNextSave.current = false;
      return;
    }

    if (!debouncedText.trim()) {
      draftService.remove(currentUser.id, chatId);
      return;
    }

    draftService.save({
      userId: currentUser.id,
      chatId,
      text: debouncedText,
    });
  }, [currentUser, chatId, debouncedText]);

  const clearDraft = () => {
    if (!currentUser || !chatId) return;

    skipNextSave.current = true;

    reset({
      text: "",
    });

    draftService.remove(currentUser.id, chatId);
  };

  return {
    clearDraft,
  };
};
