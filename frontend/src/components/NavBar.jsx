import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {

    const navigateTo = useNavigate()

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
          <Button onClick={() => navigateTo('/login')} color="inherit">Login</Button>
          <Button onClick={() => navigateTo('/register')} color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
