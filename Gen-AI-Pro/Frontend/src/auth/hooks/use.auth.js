import { useContext } from "react";
import { AuthContext } from "../auth.context.jsx";
import { useEffect } from "react";

import {
  loginUser,
  registerUser,
  logoutUser,
  getMe,
} from "../services/auth.api.js";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  const { user, setUser, loading, setLoading } = context;

  const handleLogin = async ({ email, password }) => {
    setLoading(true);

    try {
      const data = await loginUser({ email, password });
      setUser(data.user);
      return data;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async ({ name, email, password }) => {
    setLoading(true);

    try {
      const data = await registerUser({
        name,
        email,
        password,
      });

      setUser(data.user);
      return data;
    } catch (error) {
      console.error("Error registering:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);

    try {
      const data = await logoutUser();
      setUser(null);
      return data;
    } catch (error) {
      console.error("Error logging out:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(async () => {

    const getAndSetUser = async () => {
    try {

      const data = await getMe();
      setUser(data.user);
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  };
      getAndSetUser();
  }, []);



  return {
    user,
    loading,
    handleLogin,
    handleRegister,
    handleLogout,
  };
};