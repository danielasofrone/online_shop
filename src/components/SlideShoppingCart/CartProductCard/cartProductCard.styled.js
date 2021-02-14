import styled from 'styled-components';

export const ProductCard = styled.div`
  width: 100%;
  height: auto;
  padding: 5px;
  float: left;
  background-color: #ffff;
  margin-bottom: 30px;
  border-bottom: 1px solid #d0d0d0;
`;

export const ProductImage = styled.div`
  height: 100%;
  width: 100px;
  float: left;
  background-color: #fff;
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
  color: #333;
`;

export const ProductQuantity = styled.div`
  color: #333;
  width: calc(100% - 100px);
  padding: 0 15px;
  float: left;
  flex: 1;
`;

export const ChangeQuantityButton = styled.button`
  margin-top: 10px;
`;

export const RemoveProduct = styled.div`
  flex: 1;
  width: calc(100% - 100px);
  padding: 0 15px;
  float: left;
  /* text-align: right; */
  color: #333;
  font-family: 'Open Sans', sans-serif;
`;
