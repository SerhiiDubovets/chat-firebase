import styled from "styled-components";

export const MessageStyle = styled.div`
  max-width: 70%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-self: ${(props) => (props.own ? "flex-end;" : "flex-start;")};

  & img {
    width: 100%;
    height: 300px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const TextStyle = styled.div`
  /* font-size: 50px;
  font-weight: 300;
  color: #a5a5a5; */
`;

export const TimeStyle = styled.span`
  text-align: end;
  color: #cacacac9;
`;
