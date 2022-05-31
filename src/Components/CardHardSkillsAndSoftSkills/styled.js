import styled from "styled-components";

export const Container = styled.div`
  min-width: 200px;
  text-align: left;

  @media (min-width: 1330px) {
    width: 620px;
  }

  .container-content {
    display: flex;
  }

  .container-text {

    margin-left: 1rem;

    h4 {
      color: #d5d5d5;
      font-size: 1.2rem;
      letter-spacing: 0.10rem;
      font-weight: bold;
      margin-top: 10px;
      
    }

    p {
      font-size: 0.9rem;
      color: #d5d5d5;
      line-height: 1.75rem;
      font-weight: 400;
    }
  }
`;
