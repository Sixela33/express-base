import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Grid, Link } from '@mui/material';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
import useAlert from '../hooks/useAlert';
import useAuth from '../hooks/useAuth';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { auth, setAuth } = useAuth()
    const {setMessage} = useAlert()
    const navigateTo = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/users/login', {
                email,
                password
              }
            )
            setAuth(response.data)
            setMessage("Log in success")
            navigateTo('/')
        } catch (error) {
            setMessage(error.response?.data, "error")
            console.log(error)
        }
    };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 8,
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
            <Grid container justifyContent="flex-end">
                <Grid item>
                <Link href="/register" variant="body2">
                    Dont have an account? Register
                </Link>
                </Grid>
            </Grid>
        </Box>
      </Box>
    </Container>
  );
}