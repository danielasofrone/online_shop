import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addToCart, updateCart } from "../../store/actions/index";
import { checkQuantity } from "../../shared/utils";
import * as S from "./productCard.styled";

const ProductCard = ({
  addProductToCart,
  updateProductInCart,
  product,
  shoppingCart
}) => {
  const handleAddProduct = () => {
    const updatedProduct = checkQuantity(product, shoppingCart);
    if (updatedProduct.quantity > 1) {
      updateProductInCart(updatedProduct);
    } else {
      addProductToCart(updatedProduct);
    }
  };

  return (
    <S.Card>
      <S.ProductImage>
        <img src={product.image} alt="" />
        <S.PriceTag> {product.price}</S.PriceTag>
      </S.ProductImage>
      <S.CardContent>
        <h2>{product.title}</h2>
      </S.CardContent>
      <S.CardFooter>
        <S.AddButton favorite>Add to favorites</S.AddButton>
        <S.AddButton onClick={() => handleAddProduct()}>
          Add to shopping cart
        </S.AddButton>
      </S.CardFooter>
    </S.Card>
  );
};
ProductCard.propTypes = {
  addProductToCart: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  shoppingCart: PropTypes.array.isRequired,
  updateProductInCart: PropTypes.func.isRequired
};

const mapStateToProps = ({ shoppingCart }) => ({
  shoppingCart
});

const mapDispatchToProps = dispatch => ({
  addProductToCart: product => dispatch(addToCart(product)),
  updateProductInCart: product => dispatch(updateCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
