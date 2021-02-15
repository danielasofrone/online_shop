import styled from 'styled-components';

export const Button = styled.div`
  min-width: ${({isSmall}) => (isSmall ? '150px' : '300px')};
  max-width: ${({isSmall}) => (isSmall ? '163px' : '343px')};

  height: 48px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  text-align: center;
  line-height: 48px;
  border: 1px solid #dce2e5;
  border-radius: 5px;
  background: #ffffff;
  cursor: pointer;
  color: #000;
  text-decoration: none;
  &:hover {
    background-color: #f8f8f8;
  }
`;
