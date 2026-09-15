import styled from "styled-components";

import { input } from "@shared/styles/mixins/input";
import { flex, layout } from "@shared/styles/mixins/mixins";

export const Form = styled.form`
  ${layout.section}
  padding-block-start: 0px;

  border-block-end: 1px solid var(--border-separate);
`;

export const InputWrapper = styled.div`
  position: relative;

  ${flex.row}
`;

export const Input = styled.input`
  ${input.text}
`;

export const Icon = styled.div`
  position: absolute;
  inset-inline-end: 0.25rem;

  ${flex.center};

  width: 2rem;
  height: 2rem;

  color: var(--text-primary);
`;
