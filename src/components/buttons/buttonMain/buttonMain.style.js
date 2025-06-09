import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 28px;
  width: 195px;
  height: 38px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${(p) => {
    switch (p.variant) {
      case "primary":
        return css`
          background: linear-gradient(
            90deg,
            #1da684 0%,
            rgba(190, 220, 124, 0.99) 100%
          );
          color: white;
          border: none;
        `;
      case "secondary":
        return css`
          border: 3px solid transparent;

          background: linear-gradient(#fff, #fff) padding-box,
            linear-gradient(90deg, #1da684 0%, rgba(190, 220, 124, 0.99) 100%)
              border-box;

          color: #444;
        `;

      default:
        return css`
          background-color: #e0e0e0;
          color: #333;
        `;
    }
  }}
  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
          &:hover:not(:disabled),
          &:focus:not(:disabled) {
            opacity: 0.9;
            color: white;
          }
        `;
      case "secondary":
        return css`
          &:hover:not(:disabled),
          &:focus:not(:disabled) {
            opacity: 0.9;
          }
        `;

      default:
        return css`
          &:hover:not(:disabled),
          &:focus:not(:disabled) {
            opacity: 0.9;
            color: #333;
          }
        `;
    }
  }};
`;
