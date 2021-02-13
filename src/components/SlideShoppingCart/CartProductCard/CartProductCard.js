/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeFromCart, updateCart } from "../../../store/actions";
import { checkQuantity } from "../../../shared/utils";
import * as S from "./cartProductCard.styled";

const CartProductCard = ({
  removeProductFromCart,
  product,
  quantity,
  shoppingCart,
  updateProductInCart
}) => {
  const handleUpdateQuantity = type => {
    if (type === "remove" && quantity === 1) {
      removeProductFromCart(product.id);
      return;
    }
    const updatedProduct = checkQuantity(product, shoppingCart, type);
    updateProductInCart(updatedProduct);
  };

  return (
    <S.ProductCard>
      <S.ProductImage>
        <img src={product.image} alt="" />
      </S.ProductImage>
      <S.ProductTitle>{product.title}</S.ProductTitle>
      <S.ProductPrice>€ {product.price}</S.ProductPrice>

      <S.ProductPrice>
        <button onClick={() => handleUpdateQuantity("remove")}>-</button>
        {quantity} <button onClick={() => handleUpdateQuantity()}>+</button>
      </S.ProductPrice>
      <S.RemoveProduct onClick={() => removeProductFromCart(product.id)}>
        Remove
      </S.RemoveProduct>
    </S.ProductCard>
  );
};

CartProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  removeProductFromCart: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  shoppingCart: PropTypes.array.isRequired,
  updateProductInCart: PropTypes.func.isRequired
};

const mapStateToProps = ({ shoppingCart }) => ({
  shoppingCart
});

const mapDispatchToProps = dispatch => ({
  removeProductFromCart: id => dispatch(removeFromCart(id)),
  updateProductInCart: product => dispatch(updateCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartProductCard);
