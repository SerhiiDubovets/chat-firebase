import styled from "styled-components";

import { typography } from "@shared/styles/mixins/mixins";

export const Title = styled.h2`
  padding-block: ${({ theme }) => theme.space[2]};

  ${typography.sectionTitle}
`;
