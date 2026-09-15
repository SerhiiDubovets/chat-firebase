import { useCallback, useState } from "react";

import {
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from "@floating-ui/react";
import EmojiPicker, {
  EmojiClickData,
  EmojiStyle,
  SuggestionMode,
  Theme,
} from "emoji-picker-react";
import { AnimatePresence } from "framer-motion";

import { SmileIcon } from "@shared/assets/icons/icons";
import { ButtonIcon } from "@shared/ui/buttons/buttonIcon/ButtonIcon";

import * as S from "./chatEmojiPicker.style";
import { ChatEmojiPickerProps } from "./chatEmojiPickerProps.types";

export const ChatEmojiPicker = ({
  setValue,
  messageValue,
  disablePortal,
}: ChatEmojiPickerProps) => {
  const [open, setOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: "top-start",
    strategy: "fixed",
    middleware: [
      offset({
        mainAxis: 12,
        crossAxis: 16,
      }),
      flip(),
      shift({ padding: 8 }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);

  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

  const handleEmoji = useCallback(
    (emojiData: EmojiClickData) => {
      setValue("text", (messageValue ?? "") + emojiData.emoji);
    },
    [messageValue, setValue],
  );

  const picker = (
    <AnimatePresence initial={false}>
      {open && (
        <S.PickerWrap
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}>
          <S.PickerAnimation
            initial={{
              opacity: 0,
              y: 10,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 10,
              scale: 0.95,
            }}
            transition={{
              duration: 0.2,
            }}>
            <S.PickerScale>
              <EmojiPicker
                width={280}
                height={380}
                onEmojiClick={handleEmoji}
                lazyLoadEmojis={true}
                theme={Theme.LIGHT}
                emojiStyle={EmojiStyle.GOOGLE}
                autoFocusSearch={false}
                searchPlaceholder="Search"
                suggestedEmojisMode={SuggestionMode.RECENT}
                previewConfig={{
                  showPreview: false,
                }}
              />
            </S.PickerScale>
          </S.PickerAnimation>
        </S.PickerWrap>
      )}
    </AnimatePresence>
  );

  return (
    <S.EmojiPicker>
      <ButtonIcon
        ref={refs.setReference}
        {...getReferenceProps()}
        title="Open emoji picker"
        aria-label="Open emoji picker">
        <SmileIcon />
      </ButtonIcon>

      {disablePortal ? picker : <FloatingPortal>{picker}</FloatingPortal>}
    </S.EmojiPicker>
  );
};
