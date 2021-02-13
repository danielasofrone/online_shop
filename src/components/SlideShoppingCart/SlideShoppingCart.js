import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { showTotalAmount } from "../../shared/utils";
import CartProductCard from "../SlideShoppingCart/CartProductCard/CartProductCard";
import * as S from "./slideShoppingCart.styled";

const SlideShoppingCart = ({ shoppingCart }) => {
  return (
    <S.ProductsContainer>
      {shoppingCart.map(product => (
        <CartProductCard
          key={product.id}
          product={product}
          quantity={product.quantity}
        />
      ))}
      <p>
        Total: <strong>{showTotalAmount(shoppingCart)}</strong>
      </p>
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
