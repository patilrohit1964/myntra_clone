import axios from "axios";
import {
  GET_BAG_PRODUCT_WITH_ID,
  GET_DATA_WITH_CATEGORIES,
  GET_PRODUCTS,
  GET_PRODUCTS_WITH_CART,
  GET_PRODUCTS_WITH_ID,
} from "../actionTypes/actionType";
import toast from "react-hot-toast";

// get products
export const getData = (paramObject) => async (dispatch) => {
  try {
    let result = await axios.get(
      "https://myntra-backend-5dfe.onrender.com/beautyProducts",
      paramObject
    );
    let finalResult = result.data;
    dispatch({ type: GET_PRODUCTS, payload: finalResult });
  } catch (error) {
    console.log(error);
  }
};

// get with products with cart
export const fetchWishlistData = () => async (dispatch) => {
  try {
    let fetchData = await axios.get(
      "https://myntra-backend-5dfe.onrender.com/cart"
    );
    let result = fetchData.data;
    dispatch({ type: GET_PRODUCTS_WITH_CART, payload: result });
  } catch (error) {
    console.log(error);
  }
};

// get products with id
export const ProductGetId = (id) => async (dispatch) => {
  try {
    let data = await axios.get(
      `https://myntra-backend-5dfe.onrender.com/beautyProducts/${id}`
    );
    let result = data.data;
    dispatch({ type: GET_PRODUCTS_WITH_ID, payload: result });
  } catch (error) {
    console.log(error);
  }
};
// add products in wishlist
export const addItem = (data) => async (dispatch) => {
  try {
    let result = await axios.post(
      `https://myntra-backend-5dfe.onrender.com/cart`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let finalResult = result;
    if (finalResult.status == 201) {
      toast.success("added successfully");
    } else {
      toast.error("some error try after few minutes");
    }
  } catch (error) {
    console.log(error);
  }
};

// delete product with id
export const deleteCard = (id) => async (dispatch) => {
  try {
    let fetchData = await axios.delete(
      `https://myntra-backend-5dfe.onrender.com/cart/${id}`
    );
    if (fetchData.status == 200) {
      toast.success("Remove Data From Wishlist Successfully");
      dispatch(fetchWishlistData());
    }
  } catch (err) {
    console.log(err);
  }
};

// get bag product
export const getDataFromBag = (id) => async (dispatch) => {
  const fetchBagData = await axios.get(
    `https://myntra-backend-5dfe.onrender.com/beautyProducts/${id}`
  );
  dispatch({ type: GET_BAG_PRODUCT_WITH_ID, payload: fetchBagData.data });
};

// get data with categories
export const getDataWithCategory = (paramObject) => async (dispatch) => {
  let data = await axios.get(
    `https://myntra-backend-5dfe.onrender.com/beautyProducts`,
    paramObject
  );
  dispatch({ type: GET_DATA_WITH_CATEGORIES, payload: data.data });
};
