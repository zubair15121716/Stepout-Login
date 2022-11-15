import React from "react";
import { Route , Routes as Router } from "react-router-dom";
import { navigations } from "../config";
import { SecureAccount , Login , Register , About} from "../pages";
export const Routes = () => {
    return (
        <Router>
            <Route path="/" element={<Login/>}/>
            <Route path={navigations.LOGIN} element={<Login/>}/>
            <Route path={navigations.Register} element={<Register/>}/>
            <Route path={navigations.SecureAccount} element={<SecureAccount/>}/>
            <Route path={navigations.about} element={<About />}/>
        </Router>
    );
}