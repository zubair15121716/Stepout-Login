import React from 'react';  
import { Input , Button} from "../components";
import "../index.css";
import { Link } from "react-router-dom";
import logo from '../assests/logo/Logo.png' ;

export const SecureAccount = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <img src={logo}></img>
                <form>
                    <div className="sec-heading">Secure Your Account.</div>
                    <div className="sec-sub-heading">Enter and confirm a password for your account.</div>
                    <br/>
                    <Input placeholder={"Password"} name={"Password"} type={"Password"} />
                    <Input placeholder={"Confirm Password"} name={"Password"} type={"Password"}/>
                    <div className='Nextbutton'>
                        <Link to="/secure-account">
                        <Button children={"Next(1/3)"} />
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

