import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/ProductCard";
import productsData from "../../data/products.json";
import * as S from "./productList.styled";

const ProductList = ({ products }) => {
  return (
    <S.ProductList>
      {products.map(product => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </S.ProductList>
  );
};

ProductList.defaultProps = {
  products: productsData
};

ProductList.propTypes = {
  products: PropTypes.array
};

export default ProductList;
