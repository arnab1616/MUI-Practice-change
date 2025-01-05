import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function Variants() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width={345} height={200} />
      <Box>
        <Skeleton variant="text" sx={{ fontSize: '1rem'}} />
        <Skeleton variant="text" sx={{ fontSize: '0.8rem', marginRight:'1rem'}} />
      </Box>
      <Skeleton variant="rounded" width={345} height={100} />
    </Stack>
  );
}