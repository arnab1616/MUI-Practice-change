import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = createAsyncThunk(
    'product/fetchAllProducts',
    async () =>{
        try{
            const response = await axios.get('https://dummyjson.com/products')
            console.log("From product slice",response.data.products)
            return response.data.products
        } catch(err){
            throw err
        }
    }
)
export const searchProductsByQuery = createAsyncThunk(
    'product/searchhAllProducts',
    async (query) =>{
        try{
            const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`)
            console.log("From search product slice",response.data.products)
            return response.data.products
        } catch(err){
            throw err
        }
    }
)
export const addProductByForm = createAsyncThunk(
    'product/addProduct',
    async (action) =>{
        try{
            const product = {
                title: action.title,
                description: action.description,
                price: action.price,
                discount: action.discount,
                thumbnail: 'https://picsum.photos/200',
                meta:{
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                    qrCode:''
                }
            }
            const response = await axios.post('https://dummyjson.com/products/add',product)
            console.log("Data posted",response.data);
            const res = await axios.get('https://dummyjson.com/products')
            console.log("From search product slice",res.data.products)
            return res.data.products
        } catch(err){
            throw err
        }
    }
)
export const updateProductByForm = createAsyncThunk(
    'product/updateProduct',
    async (action) =>{
        try{
            console.log(action)
            const response = await axios.put(`https://dummyjson.com/products/${action.id}`,action.formJson)
            console.log("Data updated",response.data);
            const res = await axios.get('https://dummyjson.com/products')
            console.log("From search product slice",res.data.products)
            return res.data.products
        } catch(err){
            throw err
        }
    }
)
export const deleteProductById = createAsyncThunk(
    'product/deleteProduct',
    async (action) =>{
        try{
            console.log(action)
            const response = await axios.delete(`https://dummyjson.com/products/${action.id}`)
            console.log("Data deleted",response.data);
            const res = await axios.get('https://dummyjson.com/products')
            console.log("From search product slice",res.data.products)
            return res.data.products
        } catch(err){
            throw err
        }
    }
)
const initialState = {
    loading : true,
    products : [],
    error : ''
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct:(state,action)=>{
            state.loading = true
            const product = {
                title: action.payload.title,
                description: action.payload.description,
                price: action.payload.price,
                discount: action.discount,
                thumbnail: 'https://picsum.photos/200',
                meta:{
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                    qrCode:''
                }
            }
            state.products.push(product)
            state.loading = false
        },
        deleteProduct:(state,action)=>{
            state.loading = true
            let index = state.products.findIndex((elm)=> elm.id === action.payload.id)
            console.log(index)
            if (index > -1) state.products.splice(index,1)
            state.loading = false
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchProducts.fulfilled, (state,action)=>{
            state.loading = false
            state.error = ''
            state.products = action.payload
        })
        .addCase(fetchProducts.pending, (state)=>{
            state.loading = true
            state.error = ''
        })
        .addCase(searchProductsByQuery.fulfilled, (state,action)=>{
            state.loading = false
            state.error = ''
            state.products = action.payload
        })
        .addCase(searchProductsByQuery.pending, (state)=>{
            state.loading = true
            state.error = ''
        })
        .addCase(addProductByForm.fulfilled, (state,action)=>{
            state.loading = false
            state.error = ''
            state.products = action.payload
        })
        .addCase(addProductByForm.pending, (state)=>{
            state.loading = true
            state.error = ''
        })
        .addCase(updateProductByForm.fulfilled, (state,action)=>{
            state.loading = false
            state.error = ''
            state.products = action.payload
        })
        .addCase(updateProductByForm.pending, (state)=>{
            state.loading = true
            state.error = ''
        })
        .addCase(deleteProductById.fulfilled, (state,action)=>{
            state.loading = false
            state.error = ''
            state.products = action.payload
        })
        .addCase(deleteProductById.pending, (state)=>{
            state.loading = true
            state.error = ''
        })
    }
})

export const {addProduct, deleteProduct, updateProduct,} = productSlice.actions;
export default productSlice.reducer;