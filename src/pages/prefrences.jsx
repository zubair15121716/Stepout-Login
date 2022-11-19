import "../index.css";
import { Chip , Button } from "../components";
import logo from '../assests/logo/Logo.png' ;
import { SuccessModal } from "../components/success-modal";
import { images } from "../config/images";
import { useState } from "react";

export const Preferences = () => {
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
                <div className="form-heading">Your Prefercences</div>
                <div className="form-subheading">Let us know your preference so you can have a best date.</div>
                <div>
                    <p className="align-left">Outdoor Activities</p>
                    <div className="chip-holder">
                        <Chip label="Select All" id="see-more" name="seemore2"/>
                        <Chip label="Rock Climbing" id="Male" name="Male"/>
                        <Chip label="Outdoor Ice Skating" id="Female" name="Female"/>
                        <Chip label="Picnic" id="Others" name="Others"/>
                        <Chip label="Winery" id="Male" name="Male"/>
                        <Chip label="Amusement Park" id="Female" name="Female"/>
                        <Chip label="Cycling" id="Others" name="Others"/>
                        <Chip label="Hiking" id="Male" name="Male"/>
                        <Chip label="Fishing" id="Female" name="Female"/>
                        <Chip label="Outdoor Golf" id="Others" name="Others"/>
                    </div>
                </div>
                <div>
                    <p className="align-left">Indoor Activities</p>
                    <div className="chip-holder">
                        <Chip label="Select All" id="see" name="see"/>
                        <Chip label="Cinema" id="Student" name="Student" />
                        <Chip label="Theatre" id="Working" name="Working" />
                        <Chip label="Indoor Golf" id="others" name="others"/>
                        <Chip label="Student" id="Student" name="Student" />
                        <Chip label="Darts" id="Working" name="Working" />
                        <Chip label="Shuffle Board" id="others" name="others"/>
                        <Chip label="Ping Pong" id="Student" name="Student" />
                        <Chip label="Arcade" id="Working" name="Working" />
                        <Chip label="Swimming" id="others" name="others"/>
                    </div>
                </div>
                <div>
                    <p className="align-left">Resturants</p>
                    <div className="chip-holder">
                        <Chip label="Select All" id="see" name="seemore1"/>
                        <Chip label="Chinese" id="Student" name="Student" />
                        <Chip label="Swedish" id="Working" name="Working" />
                        <Chip label="Greek" id="others" name="others"/>
                        <Chip label="African" id="Student" name="Student" />
                        <Chip label="Mexican" id="Working" name="Working" />
                        <Chip label="Thai" id="others" name="others"/>
                        <Chip label="Russian" id="Student" name="Student" />
                        <Chip label="Polish" id="Working" name="Working" />
                        <Chip label="French" id="others" name="others"/>
                        <Chip label="Jewish" id="others" name="others"/>
                        <Chip label="Italian" id="others" name="others"/>
                        <Chip label="British" id="others" name="others"/>
                        <Chip label="Latvian" id="others" name="others"/>
                    </div>
                </div>
                <br/>
                    <Button children="Submit(2/3)" type="submit"/>
                </form>
                <SuccessModal label="All Done!" message="Your account has been successfully registered. You can now proceed a trip or a reservation for your date." icon={images.checkMark} open={showModal}
                closeModal={closeModal}/> 
            </div>
        </div>
    );
}