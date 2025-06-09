import { useState } from "react";

import { GiSideswipe } from "react-icons/gi";

import Beginning from "@assets/new-beginnings.png";

import { LogoGreen } from "@/components/logo/Logo.jsx";
import { LogoWhite } from "@/components/logo/Logo.jsx";

import {
  BackBtm,
  Wrap,
  ContentBlock,
  BlockTitle,
  Title,
  LogoStyle,
  SubTitle,
  BlockLogin,
  Button,
  BlockImg,
  Img,
  Slide,
  LeavesTop,
  SlideBlock,
  SlideLogo,
  SlideText,
  BlockBtm,
  ButtonLink,
  LeavesBottom,
} from "./home.style.js";
import { Link } from "react-router-dom";

const Home = () => {
  const [showSlide, setShowSlide] = useState(false);

  const handleShowSlide = () => {
    setShowSlide(!showSlide);
  };

  return (
    <Wrap>
      {showSlide && (
        <BackBtm onClick={handleShowSlide}>
          <GiSideswipe />
        </BackBtm>
      )}
      <ContentBlock>
        <BlockTitle>
          <Title>
            Welcome To <span>Green</span>Chat
          </Title>
          <LogoStyle>
            <LogoWhite />
          </LogoStyle>
          <SubTitle>A Hub Where Whispers Echo Loudest</SubTitle>
        </BlockTitle>
        <BlockLogin>
          <Button onClick={handleShowSlide}>Start chat</Button>
        </BlockLogin>
      </ContentBlock>
      <BlockImg>
        <Img src={Beginning} alt="new-beginning" />
      </BlockImg>
      <Slide $showSlide={showSlide}>
        <LeavesTop></LeavesTop>
        <SlideBlock>
          <SlideLogo>
            <LogoGreen />
          </SlideLogo>
          <SlideText>
            Never forget to go green everyday, because the greener you go the
            higher you get
          </SlideText>
          <BlockBtm>
            <ButtonLink as={Link} to="/sign-up" variant="primary">
              Sign Up
            </ButtonLink>
            <ButtonLink as={Link} to="/sign-in" variant="secondary">
              Log In
            </ButtonLink>
          </BlockBtm>
        </SlideBlock>
        <LeavesBottom></LeavesBottom>
      </Slide>
    </Wrap>
  );
};

export default Home;
