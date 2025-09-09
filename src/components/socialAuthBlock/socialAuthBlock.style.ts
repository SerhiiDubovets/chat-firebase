import styled from "styled-components";

export const SocialAuthSection = styled.div`
  text-align: center;
`;

export const SeparatorStyle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  gap: 0.313rem;

  font-size: 1rem;

  color: hsl(0, 0%, 26.7%);

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid hsl(0, 0%, 26.7%);
  }
`;

export const SocialButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;
