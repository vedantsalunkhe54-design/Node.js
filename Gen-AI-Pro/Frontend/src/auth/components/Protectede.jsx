import { useAuth } from "../hooks/use.auth";
import { Navigate } from "react-router-dom";

export const Protected = ({ children }) => {
    const { loading, user } = useAuth();

    if (loading) {
        return (
            <main>
                <h1>Loading...</h1>
            </main>
        );
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};
