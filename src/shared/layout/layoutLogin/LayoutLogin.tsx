import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Outlet } from "react-router-dom";

import Reflecting from "@shared/assets/images/reflecting.png";
import { LogoWhite } from "@shared/ui/logo/Logo";

import {
  BlockImgStyle,
  BlockLogoStyle,
  ContainerLoginStyle,
  LeavesBottomStyle,
  LeavesTopStyle,
  LoginImgStyle,
  LoginStyle,
  LogoTextStyle,
  SectionBlockStyle,
  SubLogoTextStyle,
  WrapLoginStyle,
  WrapOutletStyle,
  WrapSignStyle,
} from "./layoutLogin.style";

export const LayoutLogin = () => {
  return (
    <SectionBlockStyle>
      <ContainerLoginStyle>
        <WrapLoginStyle>
          <LeavesTopStyle></LeavesTopStyle>
          <LoginStyle>
            <OverlayScrollbarsComponent>
              <WrapOutletStyle>
                <WrapSignStyle>
                  <Outlet />
                </WrapSignStyle>
              </WrapOutletStyle>
            </OverlayScrollbarsComponent>
          </LoginStyle>
          <LeavesBottomStyle></LeavesBottomStyle>
        </WrapLoginStyle>
        <BlockImgStyle>
          <BlockLogoStyle>
            <LogoTextStyle />
            <LogoWhite />
            <SubLogoTextStyle>
              A Hub Where Whispers Echo Loudest
            </SubLogoTextStyle>
          </BlockLogoStyle>
          <LoginImgStyle src={Reflecting} alt="reflecting" />
        </BlockImgStyle>
      </ContainerLoginStyle>
    </SectionBlockStyle>
  );
};
