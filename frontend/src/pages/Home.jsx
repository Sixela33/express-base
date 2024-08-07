import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigateTo = useNavigate()

    return (
        <div>
            <Button onClick={() => navigateTo('/login')}>Login</Button>
            <Button onClick={() => navigateTo('/register')}>Register</Button>
            <Button onClick={() => navigateTo('/protected')}>Protected</Button>
        </div>
    )
}
