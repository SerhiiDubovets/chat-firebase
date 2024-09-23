import styled from "styled-components";

export const Bubble = styled.div`
  background-color: ${(props) =>
    props.own ? "#5783fe;" : "rgba(17, 25, 40, 0.3);"};
  border-radius: 10px;
  padding: 20px 20px 10px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
