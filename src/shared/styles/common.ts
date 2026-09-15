import styled from "styled-components";

import { typography } from "./mixins/mixins";

export const TimeMessageStyle = styled.span`
  display: block;

  text-align: end;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.5;

  color: hsla(0, 0%, 79.2%, 0.79);
`;

export const EmptyState = styled.p`
  ${typography.emptyState}

  color: var(--text-secondary-mute);
`;
