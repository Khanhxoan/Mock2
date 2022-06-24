import { message } from 'antd';
import axios from '../axios'
import { getCategoriesStart, getCategoriesSuccess, getProductsStart, getProductsSuccess } from './reducer';

// Get all categories
export const getCategories = async (dispatch) => {
    dispatch(getCategoriesStart());
    try {
        const res = await axios.get("/v1/products/get-all-categories")
        dispatch(getCategoriesSuccess(res.data));
    }
    catch (err) {
        message.error({
            title: "Get Categories Failed",
            content: err.response.data.message
        })
    }
}

// Get product by category
export const getProducts= async (dispatch, category) => {
    dispatch(getProductsStart());
    try {
        const res = await axios.get(`/v1/products?category=${category}`)
        dispatch(getProductsSuccess(res.data));
    }
    catch (err) {
        message.error({
            title: "Get Categories Failed",
            content: err.response.data.message
        })
    }
}
