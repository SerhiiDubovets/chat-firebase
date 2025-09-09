import { ButtonVariant } from "@/types/types";
import { LinkProps } from "react-router-dom";

export interface BlockSignBtnLinkStyleProps {
  as?:
    | React.ForwardRefExoticComponent<
        LinkProps & React.RefAttributes<HTMLAnchorElement>
      >
    | undefined;
  to: string;
  $variant: ButtonVariant;
}
