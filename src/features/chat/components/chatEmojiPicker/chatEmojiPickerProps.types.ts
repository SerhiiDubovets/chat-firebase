import { UseFormSetValue } from "react-hook-form";

import { SendInputMessage } from "@shared/types/common.types";

export interface ChatEmojiPickerProps {
  setValue: UseFormSetValue<SendInputMessage>;
  messageValue: string;
  disablePortal?: boolean;
}
