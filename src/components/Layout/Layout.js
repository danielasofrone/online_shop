import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import * as S from './layout.styled';

const Layout = ({children}) => (
  <S.MainWrapper>
    <Header />
    <S.ContentWrapper>{children}</S.ContentWrapper>
  </S.MainWrapper>
);

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
