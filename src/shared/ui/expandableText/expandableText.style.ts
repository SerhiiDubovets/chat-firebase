import styled from "styled-components";

import { lineClamp } from "@shared/styles/mixins/mixins";

import { ExpandableTextStyleProps } from "./expandableText.types";

export const Wrap = styled.div<ExpandableTextStyleProps>`
  ${({ $expanded, $maxLines }) => !$expanded && lineClamp($maxLines)};

  text-overflow: ellipsis;
`;
