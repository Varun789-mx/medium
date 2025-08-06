import { useNavigate } from "react-router-dom"
import { useAuth } from "../Hooks/useAuth"
import type React from "react";
interface ProtectRouterprop {
    children: React.ReactNode;
}
export const ProtectedRoutes: React.FC<ProtectRouterprop> = ({ children }) => {
    const navigate = useNavigate();
    const { loggedin, loading } = useAuth()
    if (loading) {
        return (
            <div>Loading....</div>
        )
    }
    if (!loading && !loggedin) {
        navigate('/login');
        return null;
    }
    return (
        <>
            {children}
        </>

    )
}