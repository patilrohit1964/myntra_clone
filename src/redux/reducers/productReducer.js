import {
  GET_BAG_PRODUCT_WITH_ID,
  GET_DATA_WITH_CATEGORIES,
  GET_PRODUCTS,
  GET_PRODUCTS_WITH_CART,
  GET_PRODUCTS_WITH_ID,
} from "../actionTypes/actionType";

const initialstate = {
  products: [],
  cartProducts: [],
  getDataWithCategories: [],
  getWithId: {},
  isLoading: true,
};

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, isLoading: false, products: action.payload };
    case GET_PRODUCTS_WITH_CART:
      return { ...state, isLoading: false, cartProducts: action.payload };
    case GET_PRODUCTS_WITH_ID:
      return { ...state, isLoading: false, getWithId: action.payload };
    case GET_BAG_PRODUCT_WITH_ID:
      return { ...state, isLoading: false, getWithId: action.payload };
    case GET_DATA_WITH_CATEGORIES:
      return {
        ...state,
        isLoading: false,
        getDataWithCategories: action.payload,
      };
    default:
      return state;
  }
};
