import {useContext} from "react";
import { AuthContext } from "../auth.context.js";
import {loginUser, registerUser, logoutUser, getMe} from "../services/auth.api.js";

export const useAuth=()=>{
    const context=useContext(AuthContext)

    const {user, setUser, loading, setLoading}=context;

    const handleLogin=async({email, password})=>{
        setLoading(true)

        await loginUser({email, password})
        const data=await loginUser({email, password});

        setUser(data.user);
        setLoading(false)
    }

    const handleRegister=async({name, email, password})=>{
        setLoading(true)

        const data=await registerUser({name, email, password});

        setUser(data.user);
        setLoading(false)
    }

    const handleLogout=async()=>{
        setLoading(true)
        const data= await logoutUser();
        setUser(null);
        setLoading(false)
    }

    return {user, loading, handleLogin, handleRegister, handleLogout};
}