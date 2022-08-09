import { useEffect } from 'react'
import {
    useNavigate
} from "react-router-dom";
import { useAuthUser } from './../../hooks/useAuthUser';

export const ProtectedRoute = ({ children }) => {
    const { user } = useAuthUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.username) navigate('/');
    }, [navigate, user]);

    return (
        children
    )
}
