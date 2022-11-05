import React from "react";
import Input from "../components/input";
import Loginbutton from "../components/log-button";
import Registerbutton from "../components/reg-button";
import "../index.css";
import { Link } from "react-router-dom";
import logo from '../assests/logo/Logo@2x.png' ;
export default function Register(){
    return (
        <div className="wrapper">
            <div className="container">
                <img src={logo}></img>
                <form>
                    <div className="reg-heading">Create An Account</div>
                    <div className="reg-sub-head">Please enter below details to get registered.</div>
                    <br/>
                    <div className="split-input">
                    <Input placeholder={"First Name"} name={"First"} type={"text"}/>
                    <Input placeholder={"Last Name"} name={"Last"} type={"text"}/>
                    </div>
                    <Input placeholder={"Date Of Birth"} id="date-in" name={"Date"} type={"date"} />
                    <Input placeholder={"Email"} name={"Email"} type={"Email"} />
                    <Input placeholder={"Username"} name={"Username"} type={"text"}/>
                    <div className="reg-accept-container">
                        <div className="reg-form-control">
                            <input type="checkbox" id="Accept Terms&Conditions"></input>
                            <label htmlFor="Accept Terms&Conditions">Aceept Terms&Conditions</label>
                        </div>
                    </div>
                    <Registerbutton />
                    <hr/>
                    <h6> Already Have an Account ? </h6>
                    <Link to="/login">
                    <Loginbutton />
                    </Link>
                </form>
            </div>
        </div>
    );
}