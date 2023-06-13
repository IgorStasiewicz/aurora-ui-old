import styled from "styled-components";
import img from "../../assets/IMG_0063.jpg";

export const StyledH1 = styled.h1`
  padding-top: 170px;
  align-self: center;
  text-align: center;
  font-size: 30px;
`;

export const StyledJobImgWrapper = styled.div`
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

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: column-reverse;
  }

  .second-column {
    margin-left: 70px;

    ${({ theme }) => theme.mq.tablet} {
      margin-left: 0px;
    }

    .item {
      margin-bottom: 30px;
      width: 200px;

      label {
        font-size: 12px;
        color: crimson;
      }

      h3 {
        font-size: 18px;
        width: 400px;
        margin-top: 3px;

        ${({ theme }) => theme.mq.tablet} {
          width: 80vw;
        }
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;

  h3 {
    font-size: 16px;
    margin-top: 10px;
  }
`;

export const ListWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 250px;
  height: 250px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 17px 1px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  color: black;

  &:hover {
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 37px 10px;
  }

  cursor: pointer;

  .background-img {
    border-radius: 25px;
    height: 100%;
    background: url(${img});
    background-size: cover; /* <------ */
    background-repeat: no-repeat;
    background-position: bottom;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 300px;
  transform: translate(-50%, -50%);
  width: 520px;
  border: none;
  outline: none;
  border-radius: 25px;
  background: ${(props) => `url(${props.currentImg})`};
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 17px 1px;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;

  .prev {
    position: absolute;
    top: 45%;
    left: -14%;
    font-size: 30px;
    color: white;
    background: transparent;
    border: none;
    outline: none;
    border: 2px solid white;
    border-radius: 6px;
    /* padding: 8px 8px; */
    padding: 0px 6px 3px;
  }

  .next {
    position: absolute;
    top: 45%;
    right: -14%;
    font-size: 30px;
    color: white;
    background: transparent;
    border: none;
    outline: none;
    border: 2px solid white;
    border-radius: 6px;
    /* padding: 8px 8px; */
    padding: 0px 6px 3px;
  }
`;

export const ImagesWrapper = styled.div`
  padding-top: 200px;
  width: 90vw;
  margin: 0 auto;

  .item {
    margin: 0 40px 40px;
  }

  img {
    width: 300px;
    height: 300px;
  }
`;

export const Container = styled.div`
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }

  li {
    font-size: 16px;
    margin: 0 12px;
    cursor: pointer;
  }

  .selected {
    color: green;
    font-size: 20px;
  }

  .disabled {
    cursor: not-allowed;
    border: 2px solid grey !important;
    color: grey;
  }

  .next {
    border: 2px solid black;
    padding: 4px 8px;
  }

  .previous {
    border: 2px solid black;
    padding: 4px 8px;
  }
`;

export const SingleItem = styled.div`
  display: flex;
  flex-wrap: wrap;

  .item {
    &:hover {
      box-shadow: rgb(0 0 0 / 20%) 0px 3px 37px 10px;
    }

    cursor: pointer;
  }
`;
