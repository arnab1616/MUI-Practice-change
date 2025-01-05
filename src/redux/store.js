
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice'
// import searchProductReducer from './searchProductSlice';

export const  store = configureStore({
    reducer: { 
        products: productReducer
    }
})