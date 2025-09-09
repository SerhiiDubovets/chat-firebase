import React from "react";

import { ButtonAuthSocial } from "@/components/buttons/buttonAuthSocial/ButtonAuthSocial";
import { GoogleIcon } from "@/icons";
import {
  SeparatorStyle,
  SocialAuthSection,
  SocialButtonGroup,
} from "./socialAuthBlock.style";

export interface SocialAuthBlockProps {
  onSocialClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const SocialAuthBlock = ({ onSocialClick }: SocialAuthBlockProps) => (
  <SocialAuthSection>
    <SeparatorStyle>or continue with</SeparatorStyle>
    <SocialButtonGroup>
      <ButtonAuthSocial onClick={onSocialClick} data-provider="google">
        <GoogleIcon />
      </ButtonAuthSocial>
      {/* <ButtonAuthSocial onClick={onSocialClick} data-provider="github">
        <GitIcon />
      </ButtonAuthSocial>
      <ButtonAuthSocial onClick={onSocialClick} data-provider="facebook">
        <FacebookIcon />
      </ButtonAuthSocial> */}
    </SocialButtonGroup>
  </SocialAuthSection>
);
