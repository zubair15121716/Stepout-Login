import "../index.css";
import Login from '../components/log-button';
import Register from '../components/reg-button';
import Input from '../components/input';
import logo from '../assests/logo/Logo@2x.png' ;
export default function Index(){
    return(
        <div className="wrapper">
            <div className="container">
                <img src={logo} alt="logo" className="logo"></img>
                <form>
                <h1 className="form-heading"><b>Login To Your Account</b></h1>
                <h6 className="form-subheading">Please Provide your Login Details</h6>
            <Input type="email" name="email" placeholder="Email" />
            <Input type="password" name="password" placeholder="Password"/>
                <div className="remember-container">
                    <div className="form-control">
                        <input type="checkbox" name="remember" value="remember" id="remember"></input> 
                        <label htmlFor="remember" >Remember Me</label>
                    </div>
                    <a href="javascript:void(0)" className="link-left">Forget Password?</a>
                </div>
                <Login />
                <hr />
                <a href="javascript:void(0)" className="link-left">Don't have an account</a>
                <br/>
                <Register />
                </form>
            </div>
        </div>
    );
}