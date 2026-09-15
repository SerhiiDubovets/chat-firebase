import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  overflow: auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 4rem;
  padding-inline: 24px;
  padding-block: 12px;
`;

export const Title = styled.h2`
  margin-inline-start: 4rem;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.33;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  padding-inline: 16px;
  padding-block: 12px;
  position: relative;
  border-block-end: 1px solid #dddddd35;

  & svg {
    position: absolute;
    inset-inline-start: 26px;
    top: 50%;
    transform: translateY(-50%);
    color: hsl(0, 0%, 46%);
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: #26272d;
  border-radius: 8px;
  border: none;
  padding-block: 2px;
  padding-inline-start: 36px;
  padding-inline-end: 12px;
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

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const SearchMessage = styled.p`
  margin-block-start: 3rem;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  text-align: center;

  color: hsl(0, 0%, 64.7%);
`;
//  AddUserHeaderStyle,
//   AddUserListWrapperStyle,
//   AddUserStyle,
//   AddUserTitleStyle,
//   FormStyle,
//   SearchInputStyle,
//   SearchMessageStyle,
