import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addToCart, updateCart} from '../../store/actions/index';
import {checkQuantity} from '../../shared/utils';
import heart from '../../assets/icons/heart.svg';
import * as S from './productCard.styled';

const ProductCard = ({
  addProductToCart,
  updateProductInCart,
  product,
  shoppingCart,
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
      </S.ProductImage>
      <S.CardContent>
        <S.TextContainer>{product.title}</S.TextContainer>
        <S.PriceTag>
          € {''} {product.price}
        </S.PriceTag>
      </S.CardContent>
      <S.CardFooter>
        <S.FavoritesButton favorite>
          <S.Icon src={heart} />
        </S.FavoritesButton>
        <S.AddButton onClick={() => handleAddProduct()}>
          Add to cart
        </S.AddButton>
      </S.CardFooter>
    </S.Card>
  );
};
ProductCard.propTypes = {
  addProductToCart: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  shoppingCart: PropTypes.array.isRequired,
  updateProductInCart: PropTypes.func.isRequired,
};

const mapStateToProps = ({shoppingCart}) => ({
  shoppingCart,
});

const mapDispatchToProps = dispatch => ({
  addProductToCart: product => dispatch(addToCart(product)),
  updateProductInCart: product => dispatch(updateCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
