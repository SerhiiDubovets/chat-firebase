import styled from "styled-components";

import { ButtonIcon } from "@shared/ui/buttons/buttonIcon/ButtonIcon";

import { InputStyleProps, ToggleButtonStyleProps } from "./inputField.types";

export const InputWrapperStyle = styled.div`
  margin-block-end: 1.25rem;
`;

export const InputBlockStyle = styled.div`
  position: relative;
`;

export const LabelStyle = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  margin-block-end: 0.725rem;

  font-weight: 400;
  font-size: 1.125rem;

  color: hsl(0, 0%, 26.7%);
  outline: none;

  & span {
    color: #ff3d00;
  }
`;

export const InputStyle = styled.input<InputStyleProps>`
  width: 100%;
  height: 3rem;
  padding-inline: 1.25rem;
  padding-inline-end: 2.125rem;
  padding-block: 0.625rem;

  border: 1px solid
    ${({ $hasError }) => ($hasError ? "red" : "hsl(0, 4%, 82%)")};
  border-radius: 1.563rem;
  outline: none;
  background-color: transparent;
  color: hsl(0, 0%, 0%);
`;

export const ToggleButtonStyle = styled(ButtonIcon)<ToggleButtonStyleProps>`
  position: absolute;
  top: 52%;
  right: 1rem;
  transform: translateY(-50%);

  background: transparent;
  border: none;
  color: ${({ $active }) => ($active ? "#444" : "hsl(0, 4%, 82%)")};

  cursor: pointer;
`;
