import {
  ADD_TO_CART,
  UPDATE_CART,
  REMOVE_FROM_CART,
} from '../constants/actionTypes';
import {updateShoppingCart} from '../../shared/utils';

const initialState = [];

const shoppingCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, {...action.payload}];

    case UPDATE_CART: {
      return updateShoppingCart(action.payload, state);
    }

    case REMOVE_FROM_CART:
      return state.filter(product => product.id !== action.id);
    default:
      return state;
  }
};

export default shoppingCart;
