import { createSelector } from "@reduxjs/toolkit";

//trỏ đến state của reducer product
const selectProduct = (state) => state.products;

//trỏ đến item allProducts của ProductSlice
export const selectAllProducts = createSelector(
    [selectProduct], (productSlice) => productSlice?.product?.allProducts?.data?.result
)
// categories
export const selectAllCategories = createSelector(
    [selectProduct], (productsReducer) => productsReducer?.categories?.allCategories?.data
)


//product 
export const selectSingleProduct = createSelector(
    [selectProduct], (productSlice) => productSlice?.product?.product?.data?.product
)

export const selectImage = createSelector(
    [selectProduct], (productSlice) => productSlice?.product.product?.data?.product.images[0]
)

export const selectRating = createSelector(
    [selectProduct], (productSlice) => productSlice?.product.product?.data?.product.rating
)

export const selectReviews = createSelector(
    [selectProduct], (productSlice) => productSlice?.product.product?.data?.reviews.total
)