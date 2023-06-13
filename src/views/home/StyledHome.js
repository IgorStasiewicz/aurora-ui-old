import styled from "styled-components";
import img from "../../assets/IMG_0063.jpg";

export const ListWrapper = styled.ul`
  display: flex;
  padding: 100px 0px;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 325px;
  height: 300px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 17px 1px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  color: black;
  margin: 40px;
  cursor: pointer;
  &:hover {
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 37px 10px;
  }

  .background-img {
    height: 85%;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    background: url(${img}) center center / cover no-repeat;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 5px;
    h3 {
      font-size: 20px;
      margin-bottom: 8px;
    }

    p {
      font-size: 12px;
    }
  }
`;
