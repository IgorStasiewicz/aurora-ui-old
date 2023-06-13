import styled from "styled-components";

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 300px;
  transform: translate(-50%, -50%);
  padding: 0 4rem;
  border: none;
  outline: none;
  border-radius: 6px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 17px 1px;
  overflow: auto;
  height: 70vh;
  background-color: white;

  .btn-wrapper {
    position: sticky;
    bottom: 0;
    background-color: white;
    padding: 1rem;
    text-align: center;
    width: 100%;
  }

  .catering-btn {
    height: 10%;
    padding: 10px 18px;
    border: 2px solid black;
    background: transparent;
    outline: none;

    /* margin-bottom: 25px; */

    :hover {
      box-shadow: rgb(0 0 0 / 20%) 0px 3px 17px 1px;
    }
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 40px 0;

      p {
        font-size: 12px;
        margin-bottom: 10px;
      }

      img {
        width: 300px;
        border-radius: 6px;
      }

      h2 {
        margin: 10px 0;
      }
    }
  }
`;
