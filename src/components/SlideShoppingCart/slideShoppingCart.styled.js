import styled from 'styled-components';

export const ProductsContainer = styled.div`
  width: 400px;
  position: fixed;
  right: 0;
  top: 0;
  background: #fff;
  opacity: 1;
  height: 100vh;

  border: 1px solid #333;
  z-index: 99;
  cursor: pointer;
`;

export const ProductsSubcontainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const BackButtonContainer = styled.div`
  height: 60px;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #d0d0d0;
  float: left;
  top: 0;
  left: 0;
  background-color: #fff;
  cursor: pointer;
`;

export const ItemsContainer = styled.div`
  overflow-y: auto;
  padding: 100px 40px 40px 40px;
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
  position: absolute;
  height: auto;
  width: 100%;
  border-top: 1px solid #d0d0d0;
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
  padding-bottom: 30px;
`;

export const IfCartEmpty = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  line-height: 30px;
  color: #d0d0d0;

  margin: 20px 0 0 20px;
`;
