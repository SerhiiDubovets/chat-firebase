import { forwardRef, KeyboardEvent } from "react";

import * as S from "./textarea.style";
import { TextareaProps } from "./textarea.types";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { submitOnEnter = false, isSending = false, onSubmit, onKeyDown, ...props },
    ref,
  ) => {
    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (submitOnEnter && onSubmit) {
        if (e.key !== "Enter" || e.shiftKey) {
          return;
        }

        e.preventDefault();

        if (!isSending) {
          onSubmit();
        }
      }

      onKeyDown?.(e);
    };

    return <S.Textarea ref={ref} {...props} onKeyDown={handleKeyDown} />;
  },
);

Textarea.displayName = "Textarea";
