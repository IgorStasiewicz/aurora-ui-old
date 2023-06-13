import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin: 0 auto;
  width: 80vw;
  padding-top: 200px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  ul {
    list-style: initial;
  }

  .item-wrapper {
    margin: 50px 0;
    font-size: 20px;

    h3 {
      font-size: 19px;
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
    }
  }
`;
