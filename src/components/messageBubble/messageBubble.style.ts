import styled from "styled-components";
import { MessageBubbleStyleProps } from "./messageBubble.types";

export const BubbleStyle = styled.div<MessageBubbleStyleProps>`
  position: relative;

  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.313rem;
  padding-inline-start: 0.5rem;
  padding-inline-end: 1.563rem;
  padding-block-start: 1rem;
  padding-block-end: 0.5rem;

  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;

  background-color: ${(props) => (props.$own ? "#BDD2B6;" : "#26272D")};
  color: ${(props) => (props.$own ? "#313535;" : "#fff")};
  border-radius: ${(props) => (props.$own ? "4px 0 4px 4px" : "0 4px 4px 4px")};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: ${(props) => (props.$own ? "100%" : "-16px")};
    right: ${(props) => (props.$own ? "-16px" : "100%")};

    display: block;
    width: 0;
    z-index: 1;

    border-style: solid;
    border-width: ${(props) =>
      props.$own ? "10px 20px 0 0;" : "0 20px 10px 0"};
    border-color: ${(props) =>
      props.$own
        ? "#BDD2B6 transparent transparent transparent;"
        : " transparent #26272D transparent transparent;"};
  }

  & img {
    max-width: 12.5rem;
    height: auto;
    object-fit: cover;
    border-radius: 0.25rem;
  }
`;
