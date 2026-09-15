import { SpinnerIcon } from "@shared/assets/icons/icons";
import { Icon } from "@shared/ui/icon/Icon";

import * as S from "./spinner.style";
import { SpinnerProps } from "./spinner.types";

export const Spinner = ({ size }: SpinnerProps) => {
  return (
    <S.Wrap>
      <Icon size={size}>
        <SpinnerIcon />
      </Icon>
    </S.Wrap>
  );
};
