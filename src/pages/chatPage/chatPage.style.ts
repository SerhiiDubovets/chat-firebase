import styled from "styled-components";

export const ChatWrap = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: ${({ theme }) => `${theme.sizes.sidePanel} 1fr`};

  min-height: 100dvh;
  overflow: hidden;
`;
