import styled from "styled-components";

export const IconsSend = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & label {
    cursor: pointer;
  }
`;

export const InputSend = styled.input`
  flex: 1;
  background-color: #26272d;
  border: none;
  outline: none;
  color: white;
  padding-inline: 12px;
  padding-block: 10px;
  border-radius: 8px;
  font-size: 16px;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const BlockEmoji = styled.div`
  display: flex;
  position: relative;

  & img {
    width: 20px;
    height: 20px;
  }
`;

export const Picker = styled.div`
  position: absolute;
  bottom: 50px;
  left: 0;
  z-index: 1;
`;
