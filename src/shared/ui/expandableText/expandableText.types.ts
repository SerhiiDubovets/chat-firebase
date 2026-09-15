import { ReactNode } from "react";

export interface ExpandableTextProps {
  children: ReactNode;
  maxLines?: number;
  expanded?: boolean;
}

export interface ExpandableTextStyleProps {
  $maxLines: number;
  $expanded?: boolean;
}
