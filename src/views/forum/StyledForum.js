import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin: 0 auto;
  width: 80vw;
  padding-top: 200px;

  display: flex;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: column-reverse;
  }

  .left-column {
    width: 50%;

    ${({ theme }) => theme.mq.tablet} {
      width: 80vw;
      margin: 0 auto;
    }

    .post-wrapper {
      border: 1.5px solid black;
      position: relative;
      max-width: 550px;
      border-radius: 6px;
      padding: 15px;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      box-shadow: rgb(161 169 250 / 50%) 0px 3px 17px 1px;

      h4 {
        position: absolute;
        top: 0;
        right: 2;
        right: 0;
        margin-right: 3px;
        margin-top: 2px;
      }

      p {
        font-size: 14px;
        margin-top: 5px;
      }
    }
  }

  .right-column {
    width: 50%;

    form {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: auto;
      margin: 0 auto;
      min-width: 700px;

      ${({ theme }) => theme.mq.tablet} {
        min-width: 0px;
        width: 80vw;
        margin: 0 auto;
        position: initial;
        margin-bottom: 70px;
      }

      input {
        height: 35px;
        border: 1.5px solid black;
        border-radius: 6px;
        margin-bottom: 25px;
        padding: 10px;
        font-size: 15px;
        box-shadow: rgb(161 169 250 / 50%) 0px 3px 17px 1px;
      }

      textarea {
        resize: none;
        height: 400px;
        border: 1.5px solid black;
        border-radius: 6px;
        padding: 10px;
        font-size: 15px;
        box-shadow: rgb(161 169 250 / 50%) 0px 3px 17px 1px;
      }

      button {
        border: 1.5px solid black;
        background: transparent;
        outline: none;
        padding: 5px 10px;
        width: 100px;
        margin-top: 15px px;
        border-radius: 6px;
        align-self: center;
        margin-top: 20px;
        box-shadow: rgb(161 169 250 / 50%) 0px 3px 17px 1px;

        :hover {
          box-shadow: rgb(0 0 0 / 20%) 0px 3px 17px 1px;
        }
      }
    }
  }
`;
