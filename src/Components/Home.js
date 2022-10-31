import { AppBar, Box, Button, Divider, Toolbar } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
 

function Home() {
  const navigate = useNavigate();
  return(
   
    <AppBar position="sticky" style={{backgroundColor: "white", color: "black"}}>
      <Toolbar>
      <Box 
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start">
        <img src={require('./Crimson OJ.png')} alt="logo" width="100" height="40" />  
        </Box>
        <Box 
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end">
        <Button color="inherit" onClick={() => navigate('SignIn')}>Sign In</Button>
        <Divider orientation="vertical"  variant="middle" flexItem />
        <Button color="inherit" onClick={() => navigate('SignUp')}>Sign Up</Button>
        </Box>
      </Toolbar>
    </AppBar>
  
  );
}
export default Home;
