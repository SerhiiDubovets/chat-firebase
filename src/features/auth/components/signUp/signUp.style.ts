import { Link } from "react-router-dom";
import styled from "styled-components";

import { input } from "@shared/styles/mixins/input";
import { Avatar as SignUpAvatar } from "@shared/ui/avatar/Avatar";

export const AvatarImg = styled(SignUpAvatar)`
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

export const InputFile = styled.input`
  ${input.file}
`;
