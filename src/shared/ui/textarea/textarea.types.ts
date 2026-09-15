import { ComponentProps } from "react";

import TextareaAutosize from "react-textarea-autosize";

export type TextareaProps = ComponentProps<typeof TextareaAutosize> & {
  submitOnEnter?: boolean;
  isSending?: boolean;
  onSubmit?: () => void;
};
