import styled from "styled-components";

export const UserInfoStyle = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  object-fit: cover;
`;

export const UserIcons = styled.div`
  display: flex;
  gap: 20px;

  & img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;
