import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: "product",
    initialState: {
        categories: {
            allCategories: null,
            isFetching: false
        },
        product: {
            products: null,
            isFetching: false
        }
    },
    reducers: {
        getCategoriesStart: (state) => {
            state.isFetching = true
        },
        getCategoriesSuccess: (state, action) => {
            state.categories.isFetching = false;
            state.categories.allCategories = action.payload
        },
        getProductsStart: (state) => {
            state.isFetching = true
        },
        getProductsSuccess: (state, action) => {
            state.product.isFetching = false;
            state.product.products = action.payload
        }
    }
})

export const { getCategoriesStart, getCategoriesSuccess, getProductsStart, getProductsSuccess } = productSlice.actions;

export default productSlice.reducer;