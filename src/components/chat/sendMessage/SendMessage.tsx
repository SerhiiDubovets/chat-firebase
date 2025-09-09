import { useForm } from "react-hook-form";

import { ButtonIcon } from "@/components/buttons/buttonIcon/ButtonIcon";
import { ChatEmojiPicker } from "@/components/chatEmojiPicker/ChatEmojiPicker";
import { SendMessageForm } from "@/components/forms/sendMessageForm/SendMessageForm";
import { FileInputButton } from "@/components/inputs/fileInputButton/FileInputButton";
import { useSendMessage } from "@/hooks/useSendMessage";
import { MicrophoneIcon, SendMessageIcon } from "@/icons/icons";

import { useChatStore } from "@/store/chatStore";

import { SendInputMessage } from "@/types/types";
import { IconsSend, InputSend } from "./sendMessage.style";

const SendMessage = () => {
  const { isCurrentUserBlocked, isReceiverUserBlocked } = useChatStore();
  const { sendMessage } = useSendMessage();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { isSubmitting },
  } = useForm<SendInputMessage>();

  const messageValue = watch("message");
  const handleSend = async (data: SendInputMessage) => {
    const message = data.message;

    sendMessage(message, reset);
  };

  return (
    <div>
      <SendMessageForm onSubmit={handleSubmit(handleSend)}>
        <IconsSend>
          <ChatEmojiPicker messageValue={messageValue} setValue={setValue} />
          <FileInputButton register={register} />
        </IconsSend>
        <InputSend
          type="text"
          placeholder="Write a message..."
          id="message"
          {...register("message", { required: true })}
          disabled={isCurrentUserBlocked || isReceiverUserBlocked}
        />
        <ButtonIcon
          type="submit"
          sizeIcon="1.25rem"
          colorIcon="#fff"
          disabled={
            isCurrentUserBlocked || isReceiverUserBlocked || isSubmitting
          }>
          {messageValue?.trim() ? <SendMessageIcon /> : <MicrophoneIcon />}
        </ButtonIcon>
      </SendMessageForm>
    </div>
  );
};

export default SendMessage;
