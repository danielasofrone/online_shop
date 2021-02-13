import styled from "styled-components";

export const ProductCard = styled.div`
  width: 100%;
  height: auto;
  padding: 5px;
  float: left;
  background-color: #ffff;
  margin-bottom: 15px;
`;

export const ProductImage = styled.div`
  height: 100%;
  width: 100px;
  float: left;
  background-color: white;
  padding: 15px;
  img {
    height: 100%;
    width: 100%;
    float: left;
    object-fit: contain;
  }
`;

export const ProductTitle = styled.div`
  width: calc(100% - 100px);
  padding: 15px 15px 0 15px;
  float: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Open Sans', sans-serif;
`;

export const ProductPrice = styled.div`
  width: calc(100% - 100px);
  padding: 0 15px;
  float: left;
  color: red;
`;

export const RemoveProduct = styled.div`
  width: calc(100% - 100px);
  padding: 0 15px;
  float: left;
  text-align: right;
  color: red;
  font-family: 'Open Sans', sans-serif;
`;
