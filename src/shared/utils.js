export const showTotalAmount = products => {
  let currentAmount = 0;

  for (const product of products) {
    currentAmount += product.quantity * product.price;
  }
  return currentAmount.toFixed(2);
};

export const checkQuantity = (product, shoppingCart, type) => {
  let newProduct = {
    ...product,
    quantity: 1
  };

  const addOrRemove = quantity => {
    return type === "remove" ? quantity - 1 : quantity + 1;
  };

  const productExists = shoppingCart.filter(
    productData => productData.id === product.id
  );

  if (productExists.length) {
    newProduct = {
      ...product,
      quantity: addOrRemove(productExists[0].quantity)
    };
  }

  return newProduct;
};

export const updateShoppingCart = (product, shoppingCart) => {
  const newShoppingCart = [...shoppingCart];
  const productIndex = shoppingCart.findIndex(
    productInCart => productInCart.id === product.id
  );
  newShoppingCart[productIndex].quantity = product.quantity;
  return newShoppingCart;
};

export const calculateCartProductQuantity = shoppingCart => {
  let quantity = 0;

  for (const product of shoppingCart) {
    quantity += product.quantity;
  }
  return quantity;
};
