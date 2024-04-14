import React from "react";
import {
    rec3,
    menuicon,
    calendericon,
    locationicon,
    shareicon,
    u3,
} from "../../assets/images";
const MeetupCard = ({ largerDevice }) => {
    return (
        <div
            className="card"
            style={{
                width: "100%",
                boxShadow: largerDevice ? "" : "0px 1px 2px rgba(0, 0, 0, 0.12)",
                border: largerDevice ? "" : "none",
            }}
        >
            <img src={rec3} className="card-img-top" alt="Third Pic" />
            <div className="card-body">
                <h6 style={{ fontWeight: "540" }} className="card-title">
                    &#128197; Meetup
                </h6>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p style={{ fontWeight: "700", width: "90%" }} className="card-text">
                        Finance & Investment Elite Social Mixer @Lujiazui
                    </p>
                    <div className="btn-group">
                        <button
                            style={{ height: "25px", width: "25px", display: "flex", flexDirection: "row-reverse" }}
                            type="button"
                            className="btn"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                style={{ marginTop: "-16px", marginLeft: "-8px" }}
                                alt="..."
                                src={menuicon}
                            />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                                <button className="dropdown-item" type="button">
                                    Edit
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button">
                                    Report
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button">
                                    Option 3
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <img
                        alt="views"
                        style={{ marginTop: "2px", width: "15px", height: "15px" }}
                        src={calendericon}
                    />
                    &nbsp;
                    <p style={{ fontSize: "14px", color: "black" }}>Fri, 12 Oct, 2018</p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img
                        alt="views"
                        style={{ marginTop: "2px", width: "10px", height: "15px" }}
                        src={locationicon}
                    />
                    &nbsp;
                    <p style={{ fontSize: "14px", color: "black" }}>Ahmedabad, India</p>
                </div>
                <button
                    style={{
                        borderRadius: "8px",
                        color: "#E56135",
                        borderColor: "#A9AEB8",
                    }}
                    type="button"
                    className="btn w-100"
                >
                    Visit Website
                </button>
                <br />
                <br />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    {largerDevice ? (
                        <>
                            <div style={{ display: "flex" }}>
                                <img
                                    style={{ width: "40px", height: "40px" }}
                                    src={u3}
                                    alt="user1"
                                />
                                &nbsp;&nbsp;
                                <h6
                                    style={{
                                        fontSize: "15px",
                                        fontWeight: "700",
                                        marginTop: "10px",
                                    }}
                                >
                                    Ronal Jones
                                </h6>
                            </div>
                            <div style={{ display: "flex" }}>
                                <img
                                    alt="views"
                                    style={{ width: "18px", height: "18px", marginTop: "10px" }}
                                    src="https://img.icons8.com/material-outlined/24/525252/visible--v1.png"
                                />
                                &nbsp;
                                <p
                                    style={{
                                        fontSize: "15px",
                                        color: "#525252",
                                        marginTop: "7.5px",
                                        marginBottom: "0px",
                                    }}
                                >
                                    1.4k views
                                </p>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button
                                    className="btn"
                                    style={{ backgroundColor: "#EDEEF0" }}
                                    type="button"
                                >
                                    <img alt="share" src={shareicon} />
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div style={{ display: "flex" }}>
                                <img
                                    style={{ width: "40px", height: "40px" }}
                                    src={u3}
                                    alt="user1"
                                />
                                &nbsp;&nbsp;
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <h6 style={{ fontSize: "15px", fontWeight: "700" }}>
                                        Ronal Jones
                                    </h6>
                                    <p
                                        style={{
                                            fontSize: "15px",
                                            color: "#525252",
                                            marginTop: "-8px",
                                            marginBottom: "0px",
                                        }}
                                    >
                                        800 views
                                    </p>
                                </div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <button
                                    className="btn"
                                    style={{ backgroundColor: "#EDEEF0" }}
                                    type="button"
                                >
                                    <img
                                        style={{ marginTop: "-3px" }}
                                        alt="share"
                                        src={shareicon}
                                    />
                                    &nbsp; Share
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MeetupCard;
