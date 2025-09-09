import { Link } from "react-router-dom";
import { BlockBtnStyle, ButtonLinkStyle } from "./blockSignBtn.style";

export const BlockSignBtn = () => {
  return (
    <BlockBtnStyle>
      <ButtonLinkStyle as={Link} to="/sign-up" $variant="primary">
        Sign Up
      </ButtonLinkStyle>
      <ButtonLinkStyle as={Link} to="/sign-in" $variant="secondary">
        Log In
      </ButtonLinkStyle>
    </BlockBtnStyle>
  );
};

export default BlockSignBtn;
