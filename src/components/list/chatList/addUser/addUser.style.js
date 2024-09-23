import styled from "styled-components";

export const AddUserStyle = styled.div`
  width: max-content;
  height: max-content;
  padding: 30px;
  background-color: rgba(17, 25, 40, 0.801);
  border-radius: 10px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 50;
`;

export const FormStyle = styled.div`
  display: flex;
  gap: 20px;

  & input {
    padding: 20px;
    border-radius: 10px;
    border: none;
    outline: none;
  }

  & button {
    padding: 20px;
    border-radius: 10px;
    background-color: #1a73e8;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

export const UserStyle = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserDetailStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const AddUserBtnStyle = styled.button`
  padding: 10px;
  border-radius: 10px;
  background-color: #1a73e8;
  color: white;
  border: none;
  cursor: pointer;
`;
