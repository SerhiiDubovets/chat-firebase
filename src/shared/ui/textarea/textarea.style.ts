import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";

import { input } from "@shared/styles/mixins/input";

export const Textarea = styled(TextareaAutosize)`
  ${input.text}

  flex: 1;
  min-width: 0;

  resize: none;

  &::-webkit-scrollbar {
    display: none;
  }

  overflow-y: auto;
`;
