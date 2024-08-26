import React, { createContext, useEffect, useState } from 'react'
import { axiosPrivate } from '../api/axios'

const AuthContext = createContext({})

export function AuthProvider({children}) {
    const [auth, setAuth] = useState()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosPrivate.get('/api/users/status')
        .then(response => {
            if (response.status === 200) return response.data;
        })
        .then(resObject => {
            setAuth(resObject)
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => setLoading(false));

    }, [])

    return (
        <AuthContext.Provider value={{ auth, setAuth, loading }}>
            {children}
        </AuthContext.Provider>    
    )
}

export default AuthContext
