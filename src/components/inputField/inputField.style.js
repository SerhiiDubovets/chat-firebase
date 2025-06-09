import styled from "styled-components";

export const InputWrapper = styled.div`
  margin-block-end: 1.25rem;
`;

export const InputBlock = styled.div`
  position: relative;
`;

export const LabelStyle = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  outline: none;
  margin-block-end: 0.725rem;
  font-weight: 400;
  font-size: 18px;
  color: #444;

  & span {
    color: #ff3d00;
  }
`;

export const InputStyle = styled.input.withConfig({
  shouldForwardProp: (prop) => prop !== "hasError",
})`
  width: 100%;
  height: 3rem;
  padding-inline: 20px;
  padding-inline-end: 34px;
  padding-block: 10px;
  border: 1px solid ${({ hasError }) => (hasError ? "red" : "#d2cece")};
  border-radius: 25px;
  outline: none;
  background-color: #fff;
  color: #000;
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 52%;
  right: 16px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
`;
