import { LogoWhite } from "@/components/logo/Logo";
import {
  BlockTitleStyle,
  LogoStyle,
  SubTitleStyle,
  TitleStyle,
} from "./blockTitle.style";

export const BlockTitle = () => {
  return (
    <BlockTitleStyle>
      <TitleStyle>
        Welcome To <span>Green</span>Chat
      </TitleStyle>
      <LogoStyle>
        <LogoWhite />
      </LogoStyle>
      <SubTitleStyle>A Hub Where Whispers Echo Loudest</SubTitleStyle>
    </BlockTitleStyle>
  );
};
