import "../index.css";
import { Button, Input  } from "../components";
import logo from '../assests/logo/Logo.png' ;
import { SuccessModal } from "../components/success-modal";
import { images } from "../config/images";
import { useState } from "react";

export const Forgotpassword = () => {
    const [showModal , setShowMoodel]=useState(false);

    const openModal = () => {
        setShowMoodel(true);
    };
    const closeModal = () => {
        setShowMoodel(false);
    };

    const eventHandler = (event) => {
        event.preventDefault();
        openModal();
    };

    return(
        <div className="wrapper">
            <div className="container">
                <img src={logo} alt="logo" className="logo"></img>
                <form onSubmit={eventHandler}>
                <div className="form-heading">Forgot Password?</div>
                <div className="form-subheading">Enter the email address associated with your account and we'll send you a password reset link.</div>
            <Input type="email" name="email" placeholder="Email" />
                <Button children="Send Link" type="submit" />
                <br/>
                <br/>
                </form>
                <SuccessModal label="All Done!" message="Your account has been successfully registered. You can now proceed a trip or a reservation for your date." icon={images.checkMark} open={showModal}
                closeModal={closeModal}/> 
            </div>
        </div>
    );
}