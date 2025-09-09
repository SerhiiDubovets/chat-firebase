import styled from "styled-components";

export const TitleStyle = styled.h2`
  margin-block-end: 0.5rem;

  font-size: 1.75rem;
  font-weight: 700;

  color: #444;
  @media (min-width: 768px) {
  }

  @media (min-width: 1200px) {
    /* margin-bottom: clamp(0.75rem, 2vw, 1rem); */
    /* font-size: clamp(2rem, 6vw, 2.375rem); */
  }
`;

export const SubTitleStyle = styled.p`
  margin-block-end: clamp(0.75rem, 2vw, 1.875rem);

  font-weight: 400;
  font-size: 1rem;

  color: #878484;

  @media (min-width: 1200px) {
    /* margin-bottom: clamp(1rem, 2vw, 1.875rem); */
    margin-block-end: 1.875rem;
    /* font-size: clamp(2rem, 6vw, 2.375rem); */
  }
`;
