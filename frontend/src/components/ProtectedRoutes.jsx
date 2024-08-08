import React, { useEffect } from 'react'
import useAuth from '../hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';
import useAlert from '../hooks/useAlert';

export default function ProtectedRoutes() {
    const {auth} = useAuth()
    const {setMessage} = useAlert()

    useEffect(() => {
        if (!auth) {
            setMessage('You need to log in to access this page.', 'error');
        }
    }, [auth]);
    
    return (auth ? <Outlet/> : <Navigate to="/login"/>)
}
