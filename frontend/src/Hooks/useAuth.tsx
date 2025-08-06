import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

interface userdataprop {
    id: string;
    email: string;
    name: string
}

export const useAuth = () => {
    const [loggedin, setloggedin] = useState(false);
    const [loading, setLoading] = useState(false);
    const [userdata, setuserdata] = useState<userdataprop | null>();
    const checkAuth = async () => {
        try {
            setLoading(true);

            const token = localStorage.getItem("token");
            if (!token) {
                setloggedin(false);
                setLoading(false);
                setuserdata(null);
                return;
            }
            const response = await axios.get(`${BACKEND_URL}/api/v1/blog/me`, {
                headers: {
                    Authorization: token,
                }
            });
            if (response.data && response.data.email) {
                setloggedin(true);
                setLoading(false);
                setuserdata(response.data);
            }
            else {
                setloggedin(false);
                setuserdata(null);
                localStorage.removeItem("token");
            }
        } catch (error) {
            console.log("Auth check failed", error);
            setloggedin(false);
            setuserdata(null);

        }
        finally {
            setLoading(false);
        }
    }

    const login = (token: any, userdata: any) => {
        localStorage.setItem("token", token);
        setloggedin(true);
        setuserdata(userdata);
    }
    const logout = () => {
        localStorage.removeItem("token");
        setloggedin(false);
        setLoading(false);
    };
    useEffect(() => {
        checkAuth();
    }, [])

    return {
        loggedin,
        loading,
        userdata,
        checkAuth,
        login,
        logout
    }
}