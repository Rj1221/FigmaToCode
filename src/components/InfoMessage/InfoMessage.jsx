import React from "react";
import { infoicon } from "../../assets/images";
const InfoMessage = () => {
    return (
        <div style={{ display: "flex" }}>
            <img
                style={{
                    color: "gray",
                    marginTop: "5px",
                    marginRight: "5px",
                    height: "13.3px",
                    width: "13.3px",
                }}
                alt="info"
                src={infoicon}
            />
            <p style={{ color: "gray", fontSize: "15px" }}>
                Your location will help us serve better and extend a
                personalised experience.
            </p>
        </div>
    );
};

export default InfoMessage;
