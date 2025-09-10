import { Link } from "react-router-dom";
import styled from "styled-components";
import { Avatar as SignUpAvatar } from "../avatar/Avatar";

export const AvatarImgStyle = styled(SignUpAvatar)`
  margin: 0 auto;

  cursor: pointer;
`;

export const LinkStyle = styled(Link)`
  padding-inline: 0.25rem;

  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;

  background-color: transparent;
  color: hsl(166, 71.9%, 37.6%);

  transition: 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: hsl(166, 71.7%, 45.7%);
  }
`;
