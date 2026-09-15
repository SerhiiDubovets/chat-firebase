import styled from "styled-components";

import {
  ellipsisText,
  flex,
  layout,
  typography,
} from "@shared/styles/mixins/mixins";

export const Header = styled.header`
  ${flex.spaceBetween}

  ${layout.section}

  height: 4rem;
`;

export const UserInfo = styled.div`
  ${flex.row}
  gap: 1.25rem;

  min-width: 0;
`;

export const UserName = styled.h2`
  max-width: 12.5rem;
  min-width: 0;

  ${typography.entityTitle}

  color: var(--text-primary);

  ${ellipsisText}
`;
