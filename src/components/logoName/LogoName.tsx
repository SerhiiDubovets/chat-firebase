import { TitleStyle } from "./logoName.style";

export const LogoName = ({ ...props }) => {
  return (
    <TitleStyle {...props}>
      <span>Green</span>Chat
    </TitleStyle>
  );
};
