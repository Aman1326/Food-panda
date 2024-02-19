import React from "react";  
import { Routes,Route } from "react-router-dom";
import { CustomerRoutes } from "./CustomerRoutes";

export const Routers= () => {
    return (
        <Routes>
        <Route path="/*" element= {<CustomerRoutes/>}/>
    </Routes>
    )
}