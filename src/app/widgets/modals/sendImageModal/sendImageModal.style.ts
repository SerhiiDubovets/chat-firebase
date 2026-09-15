import styled from "styled-components";

import { input } from "@shared/styles/mixins/input";
import { flex, form, typography } from "@shared/styles/mixins/mixins";

export const Wrap = styled.div`
  ${flex.columnCenter}
  gap: 0.5rem;
`;

export const Title = styled.p`
  ${typography.sectionTitle}
`;

export const ImageWrap = styled.div`
  width: 15.625rem;
  height: 15.625rem;

  ${flex.center}

  background-color: var(--bg-image);

  overflow: hidden;

  border-radius: ${({ theme }) => theme.radii.surface};
`;

export const Form = styled.form`
  ${form.messageForm}
`;

export const IconsWrap = styled.div`
  ${flex.row}
  gap: 0.25rem;
  padding-block: 0.125rem;
`;

export const Input = styled.input`
  ${input.text}
`;
