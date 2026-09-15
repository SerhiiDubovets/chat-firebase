import styled from "styled-components";

import { ContainerBlockStyle } from "@shared/styles/common";

export const User = styled(ContainerBlockStyle).attrs({
  as: "li",
})`
  display: flex;
  gap: 1.25rem;
  /* margin-top: 50px; */
  align-items: center;
  justify-content: space-between;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  cursor: pointer;
  &:hover,
  &:focus {
    background-color: hsl(240, 4.8%, 8.2%);
  }
`;

export const UserDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const UserName = styled.p`
  display: inline-block;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5;

  color: hsl(0, 0%, 100%);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// export const AddUserBtnStyle = styled.button`
//   padding: 10px;
//   border-radius: 10px;
//   background-color: #1a73e8;
//   color: white;
//   border: none;
//   cursor: pointer;
// `;
