import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectRoute = ({ userData, children }) => {
    if ((userData == null) & (localStorage.getItem('token') == null)) {
        return <Navigate to='login' />
    } else {
        return children;
    }
}
export default ProtectRoute