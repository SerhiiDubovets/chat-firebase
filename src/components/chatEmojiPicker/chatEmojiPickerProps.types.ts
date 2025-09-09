import { UseFormSetValue } from "react-hook-form";

import { SendInputMessage } from "@/types/types";

export interface ChatEmojiPickerProps {
  setValue: UseFormSetValue<SendInputMessage>;
  messageValue: string;
}
