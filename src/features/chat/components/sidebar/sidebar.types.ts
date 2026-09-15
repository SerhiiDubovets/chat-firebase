import { Dispatch, SetStateAction } from "react";

export type SidebarProps = {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
};
