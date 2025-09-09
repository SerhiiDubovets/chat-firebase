import { ChangeEvent } from "react";

import { Icon } from "@/components/icon/Icon";
import { PaperclipIcon } from "@/icons/icons";
import { useChatStore } from "@/store/chatStore";
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
        <Icon size="1.25rem" color="#fff">
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
