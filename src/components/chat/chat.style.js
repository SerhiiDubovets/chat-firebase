import styled from "styled-components";

export const ChatStyle = styled.div`
  flex: 2;
  border-left: 1px solid #dddddd35;
  border-right: 1px solid #dddddd35;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const TopChatStyle = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dddddd35;
`;

export const UserStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const TextStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  & span {
    font-size: 18px;
    font-weight: bold;
  }
  & p {
    font-size: 14px;
    font-weight: 300;
    color: #a5a5a5;
  }
`;

export const IconsStyle = styled.div`
  display: flex;
  gap: 20px;
`;

export const MessageBlockStyle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;

  & p {
    padding: 20px;
    background-color: rgba(17, 25, 40, 0.3);
    border-radius: 10px;
  }

  & span {
    font-size: 13px;
  }

  & img {
    width: 100%;
    height: 300px;
    border-radius: 10px;
    object-fit: cover;
  }
`;
export const BlockMessageStyle = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CenterChatStyle = styled.div`
  flex: 1;
  overflow: auto;
  display: flex;
`;

export const SelectChatStyle = styled.div`
  padding: 100px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 100%;

  & p {
    font-size: 50px;
    font-weight: 300;
    color: #a5a5a5;
  }
`;
