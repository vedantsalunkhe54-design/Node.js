import { useAuth } from "../hooks/use.auth";
import { Navigate } from "react-router-dom";
import React, { Children } from "react";

const Protected = () => {
    const {loading, user} = useAuth()


    if(loading){
        return (<main><h1>Loading...</h1></main>)
    }

    if(!user){
        return <Navigate to={'/login'} />
    }

    return children


}