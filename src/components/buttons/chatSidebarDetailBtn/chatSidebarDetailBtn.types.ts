import { ReactNode } from "react";

export interface ChatSidebarDetailBtnProps {
  children: ReactNode;
  title: string;
  rightIcon?: boolean;
  handleOpen: () => void;
}
