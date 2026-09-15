import { useEffect } from "react";

import { useForm } from "react-hook-form";

import { useMessageDraftStore } from "@features/chat/store/messageDraftStore";

import { SendInputMessage } from "@shared/types/common.types";

export const useMessageText = () => {
  const { text, setText } = useMessageDraftStore();

  const { register, handleSubmit, reset, setValue, watch } =
    useForm<SendInputMessage>({
      defaultValues: {
        text,
      },
    });

  const messageText = watch("text");

  useEffect(() => {
    setText(messageText);
  }, [messageText, setText]);

  return {
    register,
    handleSubmit,
    reset,
    setValue,
    messageText,
  };
};
