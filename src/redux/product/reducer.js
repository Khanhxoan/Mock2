import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: "product",
    initialState: {
        categories: {
            allCategories: null,
            isFetching: false,
            error: false
        },
        product: {
            allProducts: [],
            isFetching: false, 
            product: []
        },
    },
    reducers: {
        getCategoriesStart: (state) => {
            state.categories.isFetching = true
        },

        getCategoriesSuccess: (state, action) => {
            state.categories.isFetching = false;
            state.categories.allCategories = action.payload
        },
        getCategoriesFailed: (state) => {
            state.categories.error = true;
        },
        
        getProductsStart: (state) => {
            state.product.isFetching = true
        },
        getProductsSuccess: (state, action) => {
            state.product.allProducts = action.payload;
            state.product.isFetching = false
        },
        getProductsFailed: (state) => {
            state.product.error = false
        },
        getSingleProductSuccess: (state, action) => {
            state.product = action.payload;
            state.status = 'success'
        },
        getSingleProductFailed: (state) => {
            state.status = 'rejected'
        }

    }
})

export const { getCategoriesStart, getCategoriesSuccess, getProductsStart, getProductsSuccess, getCategoriesFailed, getProductsFailed, getSingleProductFailed, getSingleProductSuccess } = productSlice.actions;

export default productSlice.reducer;