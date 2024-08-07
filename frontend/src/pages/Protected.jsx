import React, { useEffect } from 'react'
import {axiosPrivate} from '../api/axios'

export default function Protected() {

    const callProtectedRoute = async () => {
        try {
            const response = await axiosPrivate.get('/api/users/status')
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        callProtectedRoute()    
    }, [])
    
  return (
    <div>Protected</div>
  )
}
