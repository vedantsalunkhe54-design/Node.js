import {useContext} from "react";
import { AuthContext } from "../auth.context.jsx";
import {loginUser, registerUser, logoutUser, getMe} from "../services/auth.api.js";

export const useAuth=()=>{
    const context=useContext(AuthContext)

    const {user, setUser, loading, setLoading}=context;

    const handleLogin=async({email, password})=>{
        setLoading(true)
        try{
            await loginUser({email, password})
        } catch (error) {
            console.error("Error logging in:", error);
        } finally {
            setLoading(false);
        }
    }

    const handleRegister=async({name, email, password})=>{
        setLoading(true)
        try {
        const data=await registerUser({name, email, password});
            setUser(data.user);
        } catch (error) {
            console.error("Error registering:", error);
        } finally {
            setLoading(false);
        }

    }

    const handleLogout=async()=>{
        setLoading(true)
        try{
        const data= await logoutUser();
        setUser(null);
        } catch(err){
            console.error("Error logging out:", err);
        }
        setLoading(false)
    }

    return {user, loading, handleLogin, handleRegister, handleLogout};
}