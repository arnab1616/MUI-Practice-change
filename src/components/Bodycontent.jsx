import { Box, Grid2 } from '@mui/material'
import React, { useEffect, useState } from 'react'
import RecipeReviewCard from './RecipeReviewCard'
import Variants from './Variants'
import { useDispatch,useSelector } from 'react-redux'
import { fetchProducts } from '../redux/productSlice'

export default function Bodycontent() {
  // const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();
  const {products, loading, error} = useSelector(state => state.products)

  useEffect(()=>{
    async function fetchProduct(){
      try{
        dispatch(fetchProducts());
      }catch(err){
        console.log(err.message)
      }
    }
    fetchProduct();
  },[dispatch])
  console.log("All product",products)
  return (
    <Box>
      {error}
      {loading?
        <Grid2 container spacing={5} justifyContent={'center'}>
          <Grid2 ><Variants/></Grid2>
          <Grid2 ><Variants/></Grid2>
          <Grid2 ><Variants/></Grid2>
          <Grid2 ><Variants/></Grid2>
          <Grid2 ><Variants/></Grid2>
          <Grid2 ><Variants/></Grid2>
        </Grid2>
      :null}
      <Grid2 container spacing={5} justifyContent={'center'}>
        {products.map((elm)=>{
          return(
            <Grid2 key={elm.id}><RecipeReviewCard props = {elm} /></Grid2>
          )
        })}
      </Grid2>
    </Box>
  )
}
