import styled from "@emotion/styled";

export const IntroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px); /* Full height minus the header height */
  text-align: left;
  color: var(--white); /* Adjust text color as needed */
`;

export const IntroContent = styled.div`
  margin: 0 auto;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;
