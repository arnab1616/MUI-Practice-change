import { Box } from '@mui/material'
import React from 'react'
import RecipeReviewCard from './RecipeReviewCard'

export default function Bodycontent() {
  return (
    <Box sx={{display:'grid', gridTemplateColumns: {xs:'repeat(1, 1fr)',sm:'repeat(2, 1fr)', md:'repeat(3, 1fr)'}, gap:5}}>
      <Box> <RecipeReviewCard/> </Box>
      <Box><RecipeReviewCard/></Box>
      <Box><RecipeReviewCard/></Box>
      <Box><RecipeReviewCard/></Box>
      <Box><RecipeReviewCard/></Box>
      <Box><RecipeReviewCard/></Box>
      <Box><RecipeReviewCard/></Box>
      <Box><RecipeReviewCard/></Box>
      <Box><RecipeReviewCard/></Box>
    </Box>
  )
}
