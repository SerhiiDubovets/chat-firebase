import { ReactNode } from "react";

export interface MessageBubbleProps {
  children: ReactNode;
  own: boolean;
  deleted: boolean;
}

export interface MessageBubbleStyleProps {
  $own?: boolean;
  $deleted?: boolean;
}
