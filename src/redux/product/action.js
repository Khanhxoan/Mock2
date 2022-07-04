import { message } from 'antd';
import axios from '../axios'
import { getCategoriesFailed, getCategoriesStart, getCategoriesSuccess, getProductsFailed, getProductsStart, getProductsSuccess, getSingleProductSuccess, getSingleProductFailed, createNewProductStart, createNewProductSuccess, createReview, getAllProductSuccess, searchProductSuccess } from './reducer';

// Get all products
export const getAllProducts = async (dispatch, page, size) => {
    dispatch(getProductsStart());
    try {
      const res = await axios.get(`/v1/products?page=${page}&size=${size}`);
      dispatch(getProductsSuccess(res.data));
    } catch (error) {
      dispatch(getProductsFailed());
    }
  };
  

// Get all categories
export const getCategories = async (dispatch) => {
    dispatch(getCategoriesStart());
    try {
        const res = await axios.get("/v1/products/get-all-categories")
        dispatch(getCategoriesSuccess(res.data));
    } catch (err) {
        dispatch(getCategoriesFailed())
        message.error({
            title: "Get Categories Failed",
            content: err.response.data.message
        })
    }
}


//get product by category
export const getProducts= async (dispatch, category) => {
    dispatch(getProductsStart());
    try {
        const res = await axios.get(`/v1/products?category=${category}`)
        dispatch(getProductsSuccess(res.data));
        console.log(res.data);
    }
    catch (err) {
        dispatch(getProductsFailed());
    }
}

export const getSingleProduct = async (dispatch, id) => {
    try{
        const res = await axios.get(`/v1/products/${id}`)
        dispatch(getSingleProductSuccess(res.data))
    }
    catch (error){
        dispatch(getSingleProductFailed())
    }
}


// Create a new product
export const createNewProduct = async (dispatch, newProduct, accessToken) => {
    try{
        const res = await axios.post("/v1/products", newProduct, {
            headers: { Authorization: `Bearer ${accessToken}` },
          })
        message.success("Create a new product successed!")
    } catch (err) {
        message.error("Create a new product failed!")
    }
}

//Search product
export const searchProduct = async (dispatch, keyword) => {
    try{
      const res = await axios.get(`/v1/search?keyword=${keyword}`)
          dispatch(searchProductSuccess(res.data));
    }
    catch(err){
      console.log(err)
    }
  }

// create review 
export const createReviewForProduct = async (
    accessToken,
    id,
    review,
    dispatch
  ) => {
    try {
      const res = await axios.post(`/v1/products/${id}/reviews`, review, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      dispatch(createReview(res.data));
    } catch (err) {
      console.log(err);
    }
  };
  

  export const getProductsPageSize= async (dispatch, page, size) => {
    try {
      const res = await axios.get(`/v1/products?page=${page}&size=${size}`);
      dispatch(getAllProductSuccess(res.data));
    }
    catch (err) {
        message.error({
            title: "Get all Product for page failed",
            content: err.response.data.message,
          });
    }
}
