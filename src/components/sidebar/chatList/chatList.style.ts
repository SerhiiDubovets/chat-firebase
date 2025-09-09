import styled from "styled-components";

export const ChatListStyle = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

export const ChatListSearchStyle = styled.div`
  display: flex;
  align-items: center;
  padding-inline: 16px;
  padding-block: 12px;
  position: relative;

  & svg {
    position: absolute;
    right: 28px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
export const ChatListSearchInputStyle = styled.input`
  width: 100%;
  background-color: #26272d;
  border-radius: 8px;
  border: none;
  padding-block: 12px;
  padding-inline-start: 12px;
  padding-inline-end: 36px;
  color: white;

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px black inset;
    -webkit-text-fill-color: white;
    caret-color: white;
  }

  &:focus,
  &:hover {
    outline: 0;
    outline-offset: 0;
  }
`;
export const ListStyle = styled.section`
  display: flex;
  flex-direction: column;
  overflow: auto;
  border-block-start: 1px solid #dddddd35;
`;

export const ListTitleStyle = styled.h2`
  padding-inline: 24px;
  padding-block: 12px;

  font-size: 20px;
  font-weight: 400;
  line-height: 1.33;
`;

export const UserListBlockStyle = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
// export const ChatListStyle = styled.div``
// export const ChatListStyle = styled.div``
// export const ChatListStyle = styled.div``
// export const ChatListStyle = styled.div``
// export const ChatListStyle = styled.div``

// .searchBar {
//   flex: 1;
//   background-color: rgba(17, 25, 40, 0.5);
//   display: flex;
//   align-items: center;
//   gap: 20px;
//   border-radius: 10px;
//   padding: 10px;
// }

// .searchBar input {
//   background-color: transparent;
//   border: none;
//   outline: none;
//   color: white;
//   flex: 1;
// }

// .searchBar img {
//   width: 20px;
//   height: 20px;
// }

// .add {
//   width: 36px;
//   height: 36px;
//   background-color: rgba(17, 25, 40, 0.5);
//   padding: 10px;
//   border-radius: 10px;
//   cursor: pointer;
// }

// .item {
//   display: flex;
//   align-items: center;
//   gap: 20px;
//   padding: 20px;
//   cursor: pointer;
//   border-bottom: 1px solid #dddddd35;
// }

// .item img {
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   object-fit: cover;
// }

// .texts {
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// }
// .texts span {
//   font-weight: 500;
// }
// .texts p {
//   font-size: 14px;
//   font-weight: 300;
// }
