import styled from "styled-components";

import { flexCenter } from "@/styles/mixins";

export const ButtonAuthSocialStyle = styled.button`
  ${flexCenter}
  width: 9.25rem;
  height: 3rem;

  box-shadow: 0 0.25rem 0.4375rem 0 hsla(0, 0%, 0%, 0.1);
  background: hsl(0, 0%, 100%);
  border-radius: 0.625rem;
  transition: 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: hsl(135, 33.3%, 97.6%);
  }
`;
