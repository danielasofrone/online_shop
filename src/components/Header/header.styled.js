import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  position: fixed;
  height: 90px;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #000;
`;

export const Logo = styled.div`
  float: left;
  margin-left: 30px;
  color: #fff;
  margin-bottom: 20px;
  cursor: pointer;
  h2 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 30px;
  }
`;

export const ItemsCountBubble = styled.header`
  width: 20px;
  height: 20px;
  position: absolute;
  z-index: 2;
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid #977fd7;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  top: 20px;
  left: 58px;
  transition: all 0.2s linear;
`;

export const ShoppingCartButton = styled.div`
  width: 90px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  background-color: #977fd7;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 50px;
    height: 50px;
    path {
      fill: white;
      transition: all 0.2s linear;
    }
  }

  &:hover {
    background-color: #fff;
    svg {
      path {
        fill: #977fd7;
      }
    }
    ${ItemsCountBubble} {
      background-color: #977fd7;
      border: 2px solid #ffffff;
      font-family: 'Open Sans', sans-serif;
      color: #ffffff;
    }
  }
`;
