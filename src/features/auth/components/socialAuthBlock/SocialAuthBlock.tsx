import { ButtonAuthSocial } from "@features/auth/components/buttonAuthSocial/ButtonAuthSocial";

import { GoogleIcon } from "@shared/ui/icons";

import {
  SeparatorStyle,
  SocialAuthSection,
  SocialButtonGroup,
} from "./socialAuthBlock.style";
import { SocialAuthBlockProps } from "./socialAuthBlock.types";

export const SocialAuthBlock = ({ onSocialClick }: SocialAuthBlockProps) => (
  <SocialAuthSection>
    <SeparatorStyle>or continue with</SeparatorStyle>
    <SocialButtonGroup>
      <ButtonAuthSocial
        onClick={() => onSocialClick("google")}
        aria-label="Continue with Google">
        <GoogleIcon />
      </ButtonAuthSocial>
      {/* <ButtonAuthSocial onClick={() => onSocialClick("github")} aria-label="Continue with Github" >
        <GitIcon />
      </ButtonAuthSocial>
      <ButtonAuthSocial onClick={() => onSocialClick("facebook")} aria-label="Continue with Facebook">
        <FacebookIcon />
      </ButtonAuthSocial> */}
    </SocialButtonGroup>
  </SocialAuthSection>
);
