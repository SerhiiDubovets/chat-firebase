import { useState } from "react";

import {
  FloatingPortal,
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useInteractions,
} from "@floating-ui/react";

import { ConfirmDeleteModal } from "@app/widgets/modals/confirmDeleteModal/ConfirmDeleteModal";

import { useDeleteMessage } from "@features/chat/hooks";

import {
  DeleteIcon,
  InfOptionsIcon,
  StarIcon,
  StarSolidIcon,
} from "@shared/assets/icons/icons";
import { formatMessageTime } from "@shared/helpers/date/formatMessageTime";
import { useModalStore } from "@shared/store/modalStore";
import { Icon } from "@shared/ui/icon/Icon";
import { LazyImage } from "@shared/ui/lazyImage/LazyImage";
import MessageBubble from "@shared/ui/messageBubble/MessageBubble";

import * as S from "./messageItem.style";
import { MessageItemProps } from "./messageItemProps.types";

export const MessageItem = ({
  message,
  currentUser,
  onHandleAddMark,
}: MessageItemProps) => {
  const [openOptions, setOpenOptions] = useState(false);
  const { openModal, closeModal } = useModalStore();
  const toggleOptions = () => {
    setOpenOptions((prev) => !prev);
  };

  const { deleteForMe, deleteForEveryone, loading } = useDeleteMessage();

  const isOwn = message.senderId === currentUser?.id;

  const refsMain = useFloating({
    open: openOptions,
    onOpenChange: setOpenOptions,
    placement: isOwn ? "bottom-end" : "bottom-start",

    whileElementsMounted: autoUpdate,
    middleware: [
      offset(8),
      flip(),
      shift({
        padding: 8,
      }),
    ],
  });

  const dismiss = useDismiss(refsMain.context);

  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);

  const onHandleDeleteForMe = async () => {
    if (!currentUser?.id) return;
    closeModal();
    deleteForMe({
      chatId: message.chatId,
      messageId: message.id,
      userId: currentUser.id,
    });
  };

  const onHandleDeleteForEveryone = async () => {
    closeModal();
    deleteForEveryone({ chatId: message.chatId, messageId: message.id });
  };

  const handleDelete = () => {
    openModal(
      <ConfirmDeleteModal
        onConfirmEveryone={onHandleDeleteForEveryone}
        onConfirmMe={onHandleDeleteForMe}
      />,
      {
        backgroundColor: "hsl(0, 0%, 34%)",
        closeBtnColor: "hsl(0, 0%, 100%)",
      },
    );
    toggleOptions();
  };

  const { image, text, deleted, deletedFor } = message;

  if (deleted) return null;

  if (deletedFor?.includes(currentUser.id)) return null;

  return (
    <S.MessageWrap $own={isOwn}>
      <MessageBubble own={isOwn} deleted={deleted}>
        <S.ButtonMenuOption
          size="sm"
          // color={"var(--text-primary)"}
          {...getReferenceProps({
            onClick: toggleOptions,
          })}
          ref={refsMain.refs.setReference}
          $own={isOwn}
          aria-label="More options"
          title="More options">
          <InfOptionsIcon />
        </S.ButtonMenuOption>

        {image && (
          <S.ImageWrap>
            <LazyImage src={image.url} alt="Image" />
          </S.ImageWrap>
        )}

        {text && <p>{text}</p>}

        <FloatingPortal>
          {openOptions && (
            <S.OptionsWrap
              {...getFloatingProps()}
              ref={refsMain.refs.setFloating}
              style={{
                ...refsMain.floatingStyles,
              }}>
              <S.ButtonOption onClick={() => onHandleAddMark(message)}>
                <Icon size="1rem">
                  {isOwn ? <StarSolidIcon /> : <StarIcon />}
                </Icon>
                Mark
              </S.ButtonOption>

              <S.ButtonOption onClick={handleDelete} disabled={loading}>
                <Icon size="1rem">
                  <DeleteIcon />
                </Icon>
                Delete
              </S.ButtonOption>
            </S.OptionsWrap>
          )}
        </FloatingPortal>
        <S.TimeMessage $own={isOwn}>
          {formatMessageTime(message.createdAt?.toDate())}
        </S.TimeMessage>
      </MessageBubble>
    </S.MessageWrap>
  );
};
