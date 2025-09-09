import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useCallback, useRef, useState } from "react";

import { ButtonIcon } from "@/components/buttons/buttonIcon/ButtonIcon";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useOnEscape } from "@/hooks/useOnEscape";
import { SmileIcon } from "@/icons/icons";
import { ChatEmojiPickerStyle, PickerStyle } from "./chatEmojiPicker.style";
import { ChatEmojiPickerProps } from "./chatEmojiPickerProps.types";

export const ChatEmojiPicker = ({
  setValue,
  messageValue,
}: ChatEmojiPickerProps) => {
  const [openEmoji, setOpenEmoji] = useState(false);
  const emojiRef = useRef<HTMLDivElement | null>(null);

  const handleOpenEmoji = () => setOpenEmoji((prev) => !prev);

  useOnClickOutside(emojiRef, () => setOpenEmoji(false));

  useOnEscape(() => setOpenEmoji(false));

  const handleEmoji = useCallback(
    (emoji: any) => {
      setValue("message", (messageValue || "") + emoji.native);
      setOpenEmoji(false);
    },
    [messageValue, setValue]
  );

  return (
    <ChatEmojiPickerStyle ref={emojiRef}>
      <ButtonIcon
        sizeIcon="1.25rem"
        colorIcon="#fff"
        onClick={handleOpenEmoji}
        title="Open emoji picker"
        aria-label="Open emoji picker">
        <SmileIcon />
      </ButtonIcon>
      {openEmoji && (
        <PickerStyle>
          <Picker
            data={data}
            emojiSize={18}
            emojiButtonSize={28}
            onEmojiSelect={handleEmoji}
            perLine={7}
          />
        </PickerStyle>
      )}
    </ChatEmojiPickerStyle>
  );
};
