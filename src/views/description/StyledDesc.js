import styled from "styled-components";

export const StyledDescImgWrapper = styled.div`
  .image {
    height: 650px;
    width: 100vw;
    position: relative;
  }

  h1 {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    font-size: 50px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      font-size: 30px;
    }
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 72vw;
  padding: 50px 0;

  .second-column {
    margin-left: 70px;

    .item {
      margin-bottom: 30px;
      width: 200px;

      label {
        font-size: 12px;
        color: crimson;
      }

      h3 {
        font-size: 18px;
        width: 200px;
        margin-top: 3px;
      }
    }
  }

  p {
    font-size: 14px;
    margin-bottom: 32px;
  }

  .bottom-p {
    font-size: 14px;
    margin-bottom: 70px;
  }

  h2 {
    font-size: 22px;
    margin-bottom: 16px;
  }
  h3 {
    font-size: 18px;
    margin: 30px 0 16px;
  }

  .list {
    margin-bottom: 60px;

    ul {
      list-style: initial;
    }

    li {
      font-size: 14px;
      margin-bottom: 18px;
    }
  }
`;
