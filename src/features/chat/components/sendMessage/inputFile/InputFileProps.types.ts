import { UseFormRegister } from "react-hook-form";

import { ChatUser } from "@features/user/types/user.types";

import { SendInputMessage } from "@shared/types/common.types";

export interface InputFileProps {
  register: UseFormRegister<SendInputMessage>;
  chatUser: ChatUser | null;
  clearSearch: () => void;
}
