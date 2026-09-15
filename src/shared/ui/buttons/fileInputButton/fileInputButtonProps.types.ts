import { UseFormRegister } from "react-hook-form";

import { SendInputMessage } from "@shared/types/common.types";

export interface FileInputButtonProps {
  register: UseFormRegister<SendInputMessage>;
}
