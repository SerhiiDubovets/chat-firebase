import { Dispatch, SetStateAction } from "react";

export interface SearchBarProps {
  setInput: Dispatch<SetStateAction<string>>;
  input: string;
}
