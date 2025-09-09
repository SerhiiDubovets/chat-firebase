import { FormProps } from "@/types/types";
import { SendMessageFormStyle } from "./sendMessageForm.style";

export const SendMessageForm = ({ children, onSubmit }: FormProps) => {
  return (
    <SendMessageFormStyle onSubmit={onSubmit}>{children}</SendMessageFormStyle>
  );
};
