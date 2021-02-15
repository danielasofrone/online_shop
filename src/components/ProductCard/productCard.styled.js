import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  float: left;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: box-shadow 400ms cubic-bezier(0.02, 0.01, 0.47, 1),
    transform 200ms cubic-bezier(0.02, 0.01, 0.47, 1);
  color: #4b4f56;
  &:hover,
  &:focus {
    transform: scale3d(1.05, 1.05, 1);
    &::after {
      opacity: 1;
    }
  }
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

export const TextContainer = styled.div`
  font-family: 'PT Sans Narrow', sans-serif;
  line-height: 25px;
  font-size: 20px;
  color: #333;
`;

export const PriceTag = styled.div`
  color: red;
  float: left;
  margin-top: 10px;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
`;

export const CardFooter = styled.div`
  width: 100%;
  float: left;
  display: flex;
  height: 60px;
`;

export const AddButton = styled.div`
  width: 100%;
  flex: 3;
  line-height: 60px;
  text-align: center;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  border-top: 1px solid #d0d0d0;
  &:hover {
    background-color: #f8f8f8;
  }
`;

export const FavoritesButton = styled.div`
  border-top: 1px solid #d0d0d0;
  border-right: 1px solid #d0d0d0;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #333;
  &:hover {
    background-color: #f8f8f8;
  }
`;

export const Icon = styled.img`
  height: 40px;
  width: 40px;
  padding: 5px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin: 10px 10px 10px 15px;
`;
