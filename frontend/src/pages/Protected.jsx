import React, { useEffect } from 'react'
import {axiosPrivate} from '../api/axios'
import useAlert from '../hooks/useAlert'

export default function Protected() {

    const {setMessage} = useAlert()

    const callProtectedRoute = async () => {
        try {
            const response = await axiosPrivate.get('/api/users/status')
            console.log(response)
            setMessage("Logged in correctly")
        } catch (error) {
            setMessage("Not Logged in", "error")
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
