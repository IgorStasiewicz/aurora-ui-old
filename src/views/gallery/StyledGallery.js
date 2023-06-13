import styled from "styled-components";
import img from "../../assets/IMG_0063.jpg";

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
  padding: 170px 0px 100px;
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
  ${({ theme }) => theme.mq.tablet} {
    width: 76vw;
  }
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
  background-position: center;

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

    ${({ theme }) => theme.mq.tablet} {
      margin: 20px auto;
    }
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
