import Beginning from "@assets/new-beginnings.png";
import { useState } from "react";

import { GiSideswipe } from "react-icons/gi";

import BlockSignBtn from "./blockSignBtn/BlockSignBtn";
import { BlockTitle } from "./blockTitle/BlockTitle";
import {
  BackBtmStyle,
  BlockBtnStyle,
  BlockImgStyle,
  BlockLoginStyle,
  ButtonStyle,
  ContentBlockStyle,
  ImgStyle,
  WrapStyle,
} from "./home.style";
import MobSlidePanel from "./mobSlidePanel/MobSlidePanel";

const Home = () => {
  const [showSlide, setShowSlide] = useState(false);

  const handleShowSlide = () => {
    setShowSlide(!showSlide);
  };

  return (
    <WrapStyle>
      {showSlide && (
        <BackBtmStyle sizeIcon="24px" color="#fff" onClick={handleShowSlide}>
          <GiSideswipe />
        </BackBtmStyle>
      )}
      <ContentBlockStyle>
        <BlockTitle />
        <BlockLoginStyle>
          <ButtonStyle onClick={handleShowSlide} variant="primary">
            Start chat
          </ButtonStyle>
        </BlockLoginStyle>
      </ContentBlockStyle>
      <BlockImgStyle>
        <ImgStyle src={Beginning} alt="new-beginning" />
      </BlockImgStyle>
      <BlockBtnStyle>
        <BlockSignBtn />
      </BlockBtnStyle>
      <MobSlidePanel show={showSlide} />
    </WrapStyle>
  );
};

export default Home;
