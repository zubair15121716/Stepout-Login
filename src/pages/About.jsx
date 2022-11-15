import "../index.css";
import { Chip , Button } from "../components";
import logo from '../assests/logo/Logo.png' ;


export const About = () => {
    return(
        <div className="wrapper">
            <div className="container">
                <img src={logo} alt="logo" className="logo"></img>
                <form>
                <div className="form-heading">Tell us About Yourself</div>
                <div className="form-subheading">Fill out below details before planning your date.</div>
                <div>
                    <p className="align-left">Gender</p>
                    <div className="chip-holder">
                        <Chip label="Male" id="Male" name="Male"/>
                        <Chip label="Female" id="Female" name="Female"/>
                        <Chip label="Others" id="Others" name="Others"/>
                    </div>
                </div>
                <div>
                    <p className="align-left">Occupation</p>
                    <div className="chip-holder">
                        <Chip label="Student" id="Student" name="Student" />
                        <Chip label="Working" id="Working" name="Working" />
                        <Chip label="Others" id="others" name="others"/>
                    </div>
                </div>
                <br/>
                <Button children="Submit(2/3)"/>
                </form>
            </div>
        </div>
    );
}