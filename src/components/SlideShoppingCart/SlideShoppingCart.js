import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {showTotalAmount} from '../../shared/utils';
import CartProductCard from '../SlideShoppingCart/CartProductCard/CartProductCard';
import left_arrow from '../../assets/icons/left_arrow.svg';
import * as S from './slideShoppingCart.styled';

const SlideShoppingCart = ({shoppingCart}) => {
  return (
    <S.ProductsContainer>
      <S.BackButtonContainer>
        <S.Icon src={left_arrow}></S.Icon>
        <S.BackButtonText>CONTINUE SHOPPING</S.BackButtonText>
      </S.BackButtonContainer>
      {shoppingCart.map(product => (
        <CartProductCard
          key={product.id}
          product={product}
          quantity={product.quantity}
        />
      ))}
      <S.BottomContainer>
        <S.TotalPrice>
          Subtotal: <strong>{showTotalAmount(shoppingCart)}</strong>
        </S.TotalPrice>
      </S.BottomContainer>
    </S.ProductsContainer>
  );
};
SlideShoppingCart.propTypes = {
  shoppingCart: PropTypes.array.isRequired,
};

const mapStateToProps = ({shoppingCart}) => ({
  shoppingCart,
});

export default connect(mapStateToProps)(SlideShoppingCart);
