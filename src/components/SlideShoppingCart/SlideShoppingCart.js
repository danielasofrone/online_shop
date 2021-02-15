import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {showTotalAmount} from '../../shared/utils';
import CartProductCard from '../SlideShoppingCart/CartProductCard/CartProductCard';
import leftArow from '../../assets/icons/leftArow.svg';
import * as S from './slideShoppingCart.styled';

const SlideShoppingCart = ({shoppingCart, closeCart}) => {
  return (
    <S.ProductsContainer>
      <S.ProductsSubcontainer>
        <S.BackButtonContainer onClick={closeCart}>
          <S.Icon src={leftArow}></S.Icon>
          <S.BackButtonText>CONTINUE SHOPPING</S.BackButtonText>
        </S.BackButtonContainer>
        <S.ItemsContainer>
          {shoppingCart.length === 0 ? (
            <S.IfCartEmpty>Your cart is currently empty.</S.IfCartEmpty>
          ) : (
            shoppingCart.map(product => (
              <CartProductCard
                key={product.id}
                product={product}
                quantity={product.quantity}
              />
            ))
          )}
        </S.ItemsContainer>
        <S.BottomContainer>
          <S.TotalPrice>
            Subtotal: <strong>{showTotalAmount(shoppingCart)}</strong>
          </S.TotalPrice>
        </S.BottomContainer>
      </S.ProductsSubcontainer>
    </S.ProductsContainer>
  );
};
SlideShoppingCart.propTypes = {
  shoppingCart: PropTypes.array.isRequired,
  closeCart: PropTypes.func.isRequired,
};

const mapStateToProps = ({shoppingCart}) => ({
  shoppingCart,
});

export default connect(mapStateToProps)(SlideShoppingCart);
