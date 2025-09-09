import { useEffect, useRef, useState } from "react";

import { Icon } from "@/components/icon/Icon";
import { LazyImage } from "@/components/lazyImage/LazyImage";
import MessageBubble from "@/components/messageBubble/MessageBubble";
import timeAgo from "@/helpers/timeMessages";
import {
  CloseIcon,
  DeleteIcon,
  InfOptionsIcon,
  StarIcon,
  StarSolidIcon,
} from "@/icons/icons";

import { TimeMessageStyle } from "@/styles/sharedStyles";
import {
  ButtonCloseOptionsStyle,
  ButtonMenuOptionIconStyle,
  ButtonOptionStyle,
  MessageBlockOptionsStyle,
  MessageStyle,
} from "./messageItem.style";

import { MessageItemProps } from "./messageItemProps.types";

export const MessageItem = ({
  message,
  currentUser,
  onHandleAddMark,
}: MessageItemProps) => {
  const [openOptions, setOpenOptions] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleOptions = () => {
    setOpenOptions((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isOwn = message.senderId === currentUser?.id;

  const { img, text } = message;

  return (
    <MessageStyle $own={isOwn}>
      <MessageBubble own={isOwn}>
        <ButtonMenuOptionIconStyle
          colorIcon={isOwn ? "#000" : "#fff"}
          onClick={toggleOptions}
          $own={isOwn}
          aria-label="More options"
          title="More options">
          <InfOptionsIcon />
        </ButtonMenuOptionIconStyle>

        {img && <LazyImage src={img} alt="Image" />}

        {text && <p>{text}</p>}

        {openOptions && (
          <MessageBlockOptionsStyle ref={menuRef}>
            <ButtonOptionStyle onClick={() => onHandleAddMark(message)}>
              <Icon width="1rem" height="1rem" color="yellow">
                {isOwn ? <StarSolidIcon /> : <StarIcon />}
              </Icon>
              Mark
            </ButtonOptionStyle>

            <ButtonOptionStyle>
              <Icon width="1rem" height="1rem" color="red">
                <DeleteIcon />
              </Icon>
              Delete
            </ButtonOptionStyle>

            <ButtonCloseOptionsStyle
              onClick={toggleOptions}
              title="Close"
              aria-label="Close">
              <CloseIcon />
            </ButtonCloseOptionsStyle>
          </MessageBlockOptionsStyle>
        )}
      </MessageBubble>

      <TimeMessageStyle>
        {timeAgo(message.createdAt?.toDate())}
      </TimeMessageStyle>
    </MessageStyle>
  );
};
