import React from "react";
import ReactModal from "react-modal";

export const SuccessModal=({icon , label , message,open,closeModal,style})=>{
    const customstyle={
        ...style,
        content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                padding: "20px",
                textAlign: "center",
                outline:"none",
                border: "none",
                width: "60%",
                

        },
    }
    return <ReactModal isOpen={open} onRequestClose={closeModal} ariaHideApp={false} style={customstyle}>
                <div className="success-modal">
                    <h1>{label}</h1>
                    <div className="success-modal_img">
                        <img src={icon} alt="Success-icon" className="img-fluid"/>
                    </div>
                    <p>{message}</p>
                </div>
            </ReactModal>
}