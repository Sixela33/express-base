import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { axiosPrivate } from '../api/axios';
import useAlert from '../hooks/useAlert';
import useAuth from '../hooks/useAuth';

export default function NavBar() {

  const { auth, setAuth } = useAuth() 
  const navigateTo = useNavigate()
  const {setMessage} = useAlert()

  const logOutUser = async () => {
    try {
      await axiosPrivate.post('/api/users/logout')
      setAuth()
      setMessage("Log out success")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography onClick={() => navigateTo('/')} variant="h6" component="div" sx={{ flexGrow: 1, ":hover": {cursor: "pointer"} }}>
            Yes
          </Typography>          
          {auth ? <Button onClick={logOutUser} color="inherit">Log Out</Button>
          : (
            <>
              <Button onClick={() => navigateTo('/login')} color="inherit">Login</Button>
              <Button onClick={() => navigateTo('/register')} color="inherit">Register</Button>
            </>
          ) 
        }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
