import styled from "styled-components";

export const BlockSend = styled.div`
  padding: 20px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #dddddd35;
  gap: 20px;
`;

export const IconsSend = styled.div`
  display: flex;
  gap: 20px;

  & img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

export const InputSend = styled.input`
  flex: 1;
  background-color: rgba(17, 25, 40, 0.5);
  border: none;
  outline: none;
  color: white;
  padding: 20px;
  border-radius: 10px;
  font-size: 16px;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const BlockEmoji = styled.div`
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

export const ButtonSend = styled.button`
  background-color: #5783fe;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #5784fea3;
    cursor: not-allowed;
  }
`;
