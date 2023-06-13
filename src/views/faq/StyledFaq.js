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
  }

  .item-wrapper {
    margin: 70px 0;

    h3 {
      font-size: 19px;
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
    }
  }
`;
