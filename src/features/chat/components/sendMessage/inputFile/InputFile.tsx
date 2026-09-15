import { ChangeEvent } from "react";

import { SendImageModal } from "@app/widgets/modals/sendImageModal/SendImageModal";

import { useMessageDraftStore } from "@features/chat/store/messageDraftStore";

import { PaperclipIcon } from "@shared/assets/icons/icons";
import { useModalStore } from "@shared/store/modalStore";
import { Icon } from "@shared/ui/icon/Icon";

import * as S from "./InputFile.style";
import { InputFileProps } from "./InputFileProps.types";

export const InputFile = ({
  register,
  chatUser,
  clearSearch,
}: InputFileProps) => {
  const { setImage, clearImage, setChatUser } = useMessageDraftStore();
  const { openModal } = useModalStore();

  const handleImg = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (!file) return;

    setImage({
      file,
      url: file ? URL.createObjectURL(file) : "",
    });

    setChatUser(chatUser);

    openModal(<SendImageModal clearSearch={clearSearch} />, {
      onClose: clearImage,
    });
  };

  return (
    <>
      <label htmlFor="file">
        <Icon>
          <PaperclipIcon />
        </Icon>
      </label>
      <S.InputFile
        type="file"
        id="file"
        accept="image/*"
        {...register("file", { onChange: handleImg })}
      />
    </>
  );
};
