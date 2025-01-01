import { Box, Grid, Grid2 } from '@mui/material'
import React from 'react'
import RecipeReviewCard from './RecipeReviewCard'

export default function Bodycontent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={5} justifyContent={'center'}>
        <Grid2> <RecipeReviewCard/> </Grid2>
        <Grid2 ><RecipeReviewCard/></Grid2>
        <Grid2 ><RecipeReviewCard/></Grid2>
        <Grid2 ><RecipeReviewCard/></Grid2>
        <Grid2 ><RecipeReviewCard/></Grid2>
        <Grid2 ><RecipeReviewCard/></Grid2>
        <Grid2 ><RecipeReviewCard/></Grid2>
        <Grid2 ><RecipeReviewCard/></Grid2>
        <Grid2 ><RecipeReviewCard/></Grid2>
      </Grid2>
    </Box>
  )
}
