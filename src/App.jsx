import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from './components/ProTip';
import Copyright from './components/Copyright';
import Navbar from './components/Navbar';
import Bodycontent from './components/Bodycontent';

export default function App() {
  return (
    <Box>
      <Navbar/> 
      <Container sx={{mt:{xs:'5.5rem', sm:'5rem', md: '8rem',flexDirection:'column',display:'flex', justifyContent:'center',alignItems:'center'}}}>
        <Typography variant="h4" component="h2" sx={{ mb: 5 ,textAlign:'center'}}>Wlcome to my Page</Typography>
        <Bodycontent/>
      </Container>
      <Container maxWidth="sm" sx={{mt:10}}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" sx={{ mb: 2 ,textAlign:'center'}}>
            Material UI Vite.js example
          </Typography>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </Box>
  );
}