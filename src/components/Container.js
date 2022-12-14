import styled from "styled-components";

const Container = styled.main`
  margin-top: 110px;
  margin-bottom: ${({ adjustBottom }) => (!adjustBottom ? "0px" : "117px")};
  width: 100%;
  padding: 0px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 24px;
    color: var(--font-blue);
    margin-bottom: 43px;
  }

  .sucess-page {
    font-weight: 700;
    color: var(--font-green);
    text-align: center;
  }
`;

export default Container;
