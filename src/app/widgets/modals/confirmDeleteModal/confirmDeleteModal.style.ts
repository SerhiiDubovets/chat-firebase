import styled from "styled-components";

import { flex } from "@shared/styles/mixins/mixins";
import { Button } from "@shared/ui/buttons/button/Button";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 16rem;
`;

export const Title = styled.p`
  text-align: center;

  font-size: 1rem;
  font-weight: bold;

  color: hsl(0, 0%, 100%);
`;

export const SubTitle = styled.p`
  text-align: center;

  font-size: 0.75rem;

  color: hsl(0, 0%, 84%);
`;

export const DeleteButtonEveryone = styled.button`
  ${flex.center};

  padding-block: 0.5rem;
  padding-inline: 1.75rem;

  min-width: 12.188rem;
  height: 2.375rem;

  border-radius: 1.563rem;

  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;

  background: rgb(0 0 0 / 0%);
  color: hsl(0, 73.86%, 67.43%);

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    opacity: 0.9;
    color: hsl(0, 66%, 53%);
    background: rgb(0 0 0 / 21%);
  }
`;

export const DeleteButton = styled(Button)`
  background: hsl(0, 66%, 53%);
  color: hsl(0, 0%, 100%);
`;
