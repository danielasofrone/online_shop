import styled from "styled-components";


export const ProductsContainer = styled.div`
  width: 400px;
  position: fixed;
  right: 0;
  top: 0;
  background: #fff;
  opacity: 1;
  height: 100vh;
  padding: 100px 40px 40px 40px;
  overflow-x: auto;
  border: 1px solid #333;
  z-index: 99;
`;


export const BackButtonContainer = styled.div`
  height: 60px;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid 	#D0D0D0;
  float:left;
  top: 0;
  left: 0;
  vertical-align: middle;
  cursor: pointer;
`;

export const BackButton = styled.div`
  vertical-align: middle;
  line-height: 60px;
`;

export const BackButtonText = styled.div`
font-family: 'Open Sans', sans-serif;
line-height: 60px;
  font-size: 15px;
  color: #333;
  margin-left: 10px;
`;

export const Icon = styled.img`
  height: 20px;
  width: 20px;
margin: 20px 0 0 10px;
`;

export const BottomContainer = styled.div`
  height: 100px;
  position: absolute;
  width: 100%;
  border-top: 1px solid 	#D0D0D0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background-color: #fff;
`;

export const TotalPrice = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: #333;
  margin-top: 20px;
  margin-left: 15px;
`;