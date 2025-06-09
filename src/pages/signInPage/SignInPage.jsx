import SignIn from "@/components/signIn/SignIn";
import {
  ContainerSignInPage,
  SignInPageStyle,
  SignInImg,
  BlockImg,
  SectionBlock,
  BlockLogo,
  LeavesTop,
  LeavesBottom,
  LogoText,
  SubLogoText,
  WrapSignIn,
} from "./signInPage.style";
import Reflecting from "../../img/signIn/reflecting.png";
import { LogoWhite } from "@/components/logo/Logo";

const SignInPage = () => {
  return (
    <SectionBlock>
      <ContainerSignInPage>
        <WrapSignIn>
          <LeavesTop></LeavesTop>
          <SignInPageStyle>
            <SignIn />
          </SignInPageStyle>
          <LeavesBottom></LeavesBottom>
        </WrapSignIn>
        <BlockImg>
          <BlockLogo>
            <LogoText />
            <LogoWhite />
            <SubLogoText>A Hub Where Whispers Echo Loudest</SubLogoText>
          </BlockLogo>
          <SignInImg src={Reflecting} alt="reflecting" />
        </BlockImg>
      </ContainerSignInPage>
    </SectionBlock>
  );
};

export default SignInPage;
