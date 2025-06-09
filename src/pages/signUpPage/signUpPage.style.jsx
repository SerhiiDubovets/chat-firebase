import styled from "styled-components";

export const SignUpPageStyle = styled.div`
  border-radius: 40px;
  border: 1px solid hsl(0deg 0% 100%);
  /* min-width: 21.875rem; */
  padding-inline: clamp(1.5rem, 6vw, 6rem);
  padding-block: 3rem;

  backdrop-filter: blur(25px);
  background: hsl(0deg 0% 100% / 10%);
`;

export const BlockImg = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
`;
export const SignUpImg = styled.img`
  position: absolute;
  bottom: 0;
  right: -16px;
  width: 300px;
`;
