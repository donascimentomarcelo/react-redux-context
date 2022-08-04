import React, { useEffect } from 'react'
import {
    useNavigate
} from "react-router-dom";
import { useAuthUser } from '../context/AuthUser'

const ProtectedRoute = ({ children }) => {
    const { user } = useAuthUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) navigate('/');
    }, [user]);

    return (
        children
    )
}

export default ProtectedRoute