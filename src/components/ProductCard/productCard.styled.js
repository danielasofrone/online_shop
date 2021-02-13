import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  float: left;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductImage = styled.div`
  width: 100%;
  float: left;
  height: 200px;
  padding: 20px;
  img {
    width: 100%;
    height: 100%;
    float: left;
    position: relative;
    object-fit: contain;
  }
`;

export const CardContent = styled.div`
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  float: left;
  padding: 15px;
  flex-grow: 1;
  
`;

export const PriceTag = styled.div`
  width: auto;
  position: absolute;
  background-color: red;
  bottom: 0;
  right: 0;
  padding: 10px;
  float: left;
  padding: 10;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
`;

export const CardFooter = styled.div`
  width: 100%;
  float: left;
  display: flex;
`;

export const AddButton = styled.div`
  width: 100%;
  display: flex;
  height: 100px;
  text-align: center;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  background-color: ${({ favorite }) => (favorite ? "#e6e6ff" : " #977fd7")};
`;
