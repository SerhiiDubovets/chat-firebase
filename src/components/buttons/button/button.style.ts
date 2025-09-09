import styled, { css } from "styled-components";

import { flexCenter } from "@/styles/mixins";
import { StyledButtonProps } from "./button.types";

export const ButtonStyle = styled.button<StyledButtonProps>`
  ${flexCenter};

  padding-block: 0.5rem;
  padding-inline: 1.75rem;

  min-width: 12.188rem;
  height: 2.375rem;

  border-radius: 1.563rem;

  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${(p) => {
    switch (p.$variant) {
      case "primary":
        return css`
          background: linear-gradient(
            90deg,
            hsl(165, 70.3%, 38.2%) 0%,
            hsla(79, 57.8%, 67.5%, 0.99) 100%
          );
          color: hsl(0, 0%, 100%);

          &:hover:not(:disabled),
          &:focus:not(:disabled) {
            opacity: 0.9;
            color: hsl(0, 0%, 100%);
          }
        `;

      case "secondary":
        return css`
          border: 3px solid transparent;

          background: linear-gradient(#ffffff, #ffffff) padding-box,
            linear-gradient(
                90deg,
                hsl(165, 70.3%, 38.2%) 0%,
                hsla(79, 57.8%, 67.5%, 0.99) 100%
              )
              border-box;
          color: hsl(0, 0%, 26.7%);

          &:hover:not(:disabled),
          &:focus:not(:disabled) {
            opacity: 0.9;
          }
        `;

      default:
        return css`
          background-color: hsl(0, 0%, 87.8%);
          color: hsl(0, 0%, 20%);
          &:hover:not(:disabled),
          &:focus:not(:disabled) {
            opacity: 0.9;
          }
        `;
    }
  }}
`;
