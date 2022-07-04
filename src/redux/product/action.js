import { message } from 'antd';
import axios from '../axios'
import { getCategoriesFailed, getCategoriesStart, getCategoriesSuccess, getProductsFailed, getProductsStart, getProductsSuccess, getSingleProductSuccess, getSingleProductFailed, createNewProductStart, createNewProductSuccess } from './reducer';

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


