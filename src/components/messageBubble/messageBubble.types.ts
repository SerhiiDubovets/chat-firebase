import { ReactNode } from "react";

export interface MessageBubbleProps {
  children: ReactNode;
  own: boolean;
}

export interface MessageBubbleStyleProps {
  $own?: boolean;
}
