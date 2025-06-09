import styled from "styled-components";

export const ContainerStyle = styled.div`
  margin-inline-start: auto;
  margin-inline-end: auto;
  max-width: 100vw;

  @media (min-width: 576px) {
    max-width: 767px;
  }

  @media (min-width: 768px) {
    max-width: 991px;
  }

  @media (min-width: 992px) {
    max-width: 1199px;
  }

  @media (min-width: 1200px) {
    max-width: 1399px;
  }

  @media (min-width: 1400px) {
    max-width: 1600px;
  }
`;
