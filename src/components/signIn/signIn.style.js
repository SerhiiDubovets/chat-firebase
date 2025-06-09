import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonMain } from "../buttons/buttonMain/ButtonMain";

export const SignInStyle = styled.div`
  text-align: center;
  /* width: 380px; */
  padding-block: 20px;
  padding-inline: 20px;
  z-index: 10;
  @media (min-width: 768px) {
    width: clamp(310px, 2vw, 340px);
  }
  @media (min-width: 1200px) {
    width: 380px;
  }
`;

export const TitleStyle = styled.h2`
  color: #444;
  font-weight: 700;
  margin-block-end: 0.5rem;
  font-size: 1.75rem;
  @media (min-width: 768px) {
  }

  @media (min-width: 1200px) {
    /* margin-bottom: clamp(0.75rem, 2vw, 1rem); */
    /* font-size: clamp(2rem, 6vw, 2.375rem); */
  }
`;

export const SubTitle = styled.p`
  margin-block-end: clamp(0.75rem, 2vw, 1.875rem);

  font-weight: 400;
  font-size: 1rem;

  color: #878484;
  @media (min-width: 1200px) {
    /* margin-bottom: clamp(1rem, 2vw, 1.875rem); */
    margin-block-end: 30px;
    /* font-size: clamp(2rem, 6vw, 2.375rem); */
  }
`;

export const LinkStyle = styled(Link)`
  padding-inline: 0.25rem;
  text-decoration: underline;
  background-color: transparent;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  color: hsl(165.65deg 71.88% 37.65%);
  text-underline-offset: 3px;
  transition: 0.3s ease-in-out;

  cursor: pointer;
  &:hover,
  &:focus {
    color: hsl(165.65deg 71.88% 45.65%);
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 32px;
`;

export const FormBtn = styled(ButtonMain)`
  width: 100%;
  height: 3rem;
  margin-block-start: 25px;
  &:disabled {
    cursor: not-allowed;
    background-color: #1f8ff181;
  }
`;

export const TitleInputStyle = styled.h2`
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 18px;
  color: #fff;
`;

export const BlockAside = styled.div`
  text-align: center;
`;

export const Separator = styled.div`
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #444;
  &::before {
    content: "";
    flex: 1;
    border-bottom: 1px solid #444;
    margin-right: 5px;
  }
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #444;
    margin-left: 5px;
  }
`;

export const AsideStyle = styled.aside`
  display: flex;
  gap: clamp(1rem, 4vw, 1.5rem);
  margin-bottom: 32px;
  padding-block-end: 20px;
`;

export const ButtonIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9.25rem;
  height: 3rem;
  box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  border: 1px solid #ffffff;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover,
  &:focus {
    background-color: hsl(132.23deg 38.75% 97.67%);
  }
`;
