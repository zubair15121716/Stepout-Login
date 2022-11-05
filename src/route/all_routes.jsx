import React from "react";
import { Route , Routes as Router } from "react-router-dom";
import Login from "../pages/login";
import { navigations } from "../config";
import Register from "../pages/register";
export const Routes = () => {
    return (
        <Router>
            <Route path="/" element={<Login/>}/>
            <Route path={navigations.LOGIN} element={<Login/>}/>
            <Route path={navigations.Register} element={<Register/>}/>
        </Router>
    );
}