import { UseFormRegister } from "react-hook-form";

import { SendInputMessage } from "@/types/types";

export interface FileInputButtonProps {
  register: UseFormRegister<SendInputMessage>;
}
