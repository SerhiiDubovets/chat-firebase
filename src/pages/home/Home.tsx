import { useState } from "react";

import { GiSideswipe } from "react-icons/gi";

import Beginning from "@shared/assets/images/new-beginnings.png";
import { Button } from "@shared/ui/buttons/button/Button";

import BlockSignBtn from "./blockSignBtn/BlockSignBtn";
import { BlockTitle } from "./blockTitle/BlockTitle";
import {
  BackBtmStyle,
  BlockBtnStyle,
  BlockImgStyle,
  BlockLoginStyle,
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
        <BackBtmStyle onClick={handleShowSlide}>
          <GiSideswipe />
        </BackBtmStyle>
      )}
      <ContentBlockStyle>
        <BlockTitle />
        <BlockLoginStyle>
          <Button onClick={handleShowSlide} variant="primary">
            Start chat
          </Button>
        </BlockLoginStyle>
      </ContentBlockStyle>
      <BlockImgStyle>
        <ImgStyle src={Beginning} alt="new-beginning" />
      </BlockImgStyle>
      <BlockBtnStyle>
        <BlockSignBtn />
      </BlockBtnStyle>
      <MobSlidePanel open={showSlide} onOpenChange={setShowSlide} />
    </WrapStyle>
  );
};

export default Home;
