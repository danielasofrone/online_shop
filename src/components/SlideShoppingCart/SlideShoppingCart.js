import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { showTotalAmount } from "../../shared/utils";
import CartProductCard from "../SlideShoppingCart/CartProductCard/CartProductCard";
import close from '../../assets/icons/close.svg'
import * as S from "./slideShoppingCart.styled";

const SlideShoppingCart = ({ shoppingCart }) => {
  return (
    <S.ProductsContainer>
       <S.IconContainer>
      <S.Icon src={close}></S.Icon>
      </S.IconContainer>
      {shoppingCart.map(product => (
        <CartProductCard
          key={product.id}
          product={product}
          quantity={product.quantity}
        />
      ))}
      <S.TotalPrice>
        Total: <strong>{showTotalAmount(shoppingCart)}</strong>
        </S.TotalPrice>
    </S.ProductsContainer>
  );
};
SlideShoppingCart.propTypes = {
  shoppingCart: PropTypes.array.isRequired
};

const mapStateToProps = ({ shoppingCart }) => ({
  shoppingCart
});

export default connect(mapStateToProps)(SlideShoppingCart);
