import styled from "styled-components";

interface ChatContainerProps {
  $isDetailOpen: boolean;
}

export const ChatContainer = styled.div<ChatContainerProps>`
  display: grid;
  grid-template-columns: ${({ $isDetailOpen }) =>
    $isDetailOpen ? "320px 1fr 280px" : "320px 1fr"};
  /* grid-template-columns: 320px 1fr 280px; */
  height: 100vh;
  background-color: #1c1d22;
  color: #fff;
`;
