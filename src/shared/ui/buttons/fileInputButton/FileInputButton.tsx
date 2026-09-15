import { ChangeEvent } from "react";

import { useChatStore } from "@features/chat/store/chatStore";

import { PaperclipIcon } from "@shared/assets/icons/icons";
import { Icon } from "@shared/ui/icon/Icon";

import { FileInputButtonProps } from "./fileInputButtonProps.types";

export const FileInputButton = ({ register }: FileInputButtonProps) => {
  const { changeImg } = useChatStore();

  const handleImg = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    changeImg({
      file,
      url: file ? URL.createObjectURL(file) : "",
    });
  };

  return (
    <>
      <label htmlFor="file">
        <Icon size="1.25rem">
          <PaperclipIcon />
        </Icon>
      </label>
      <input
        type="file"
        id="file"
        accept="image/*"
        style={{ display: "none" }}
        {...register("file", { onChange: handleImg })}
      />
    </>
  );
};
