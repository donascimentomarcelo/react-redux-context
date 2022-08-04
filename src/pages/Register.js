import React from 'react'
import { useAuthUser } from '../context/AuthUser'

const Register = () => {

    const { logout } = useAuthUser();
    const toLogout = () => logout();

    return (
        <div><button onClick={toLogout}>Logout</button></div>
    )
}

export default Register