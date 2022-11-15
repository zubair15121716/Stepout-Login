import "../index.css";
import { Input , Loginbutton , Registerbutton } from "../components";
import logo from '../assests/logo/Logo.png' ;
import { Link } from "react-router-dom";

export const Login = () => {
    return(
        <div className="wrapper">
            <div className="container">
                <img src={logo} alt="logo" className="logo"></img>
                <form>
                <div className="form-heading">Login To Your Account</div>
                <div className="form-subheading">Please Provide your Login Details</div>
            <Input type="email" name="email" placeholder="Email" />
            <Input type="password" name="password" placeholder="Password"/>
                <div className="remember-container">
                    <div className="form-control">
                        <input type="checkbox" name="remember" value="remember" id="remember"></input> 
                        <label htmlFor="remember" >Remember Me</label>
                    </div>
                    <a href="javascript:void(0)" className="link-left">Forget Password?</a>
                </div>
                <Loginbutton />
                <hr />
                <a href="javascript:void(0)" className="link-left">Don't have an account?</a>
                <br/>
                <br/>
                <Link to="/register">
                    <Registerbutton />
                </Link>
                </form>
            </div>
        </div>
    );
}