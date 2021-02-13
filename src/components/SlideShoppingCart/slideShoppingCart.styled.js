import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 350px;
  position: fixed;
  right: 0;
  top: 0;
  background-color: #977fd7;
  height: 100vh;
  padding: 100px 40px 40px 40px;
  overflow-x: auto;
`;

export const IconContainer = styled.div`
position: absolute;
top: 15px;
left: 15px;
cursor: pointer;
`;

export const Icon = styled.img`
  height: 40px;
  width: 40px;
`;

export const TotalPrice = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  color: #000;
`;