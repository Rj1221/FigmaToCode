import React from "react";
import {
    jobicon,
    locationicon,
    shareicon,
    sampleProfile,
    menuicon,
} from "../../assets/images";

const JobCard = ({ largerDevice }) => {
    return (
        <div
            className="card"
            style={{
                width: "100%",
                boxShadow: largerDevice ? "" : "0px 1px 2px rgba(0, 0, 0, 0.12)",
                border: largerDevice ? "" : "none",
            }}
        >
            <div className="card-body">
                <h6 style={{ fontWeight: "540" }} className="card-title">
                    &#128188; Job
                </h6>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p style={{ fontWeight: "700", width: "90%" }} className="card-text">
                        Software Developer
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
                        src={jobicon}
                    />
                    &nbsp;
                    <p
                        style={{
                            fontSize: "14px",
                            color: "black",
                            width: largerDevice ? "" : "150px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                        }}
                    >
                        Innovaccer Analytics Private Ltd.
                    </p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img
                        alt="views"
                        style={{ marginTop: "2px", width: "10px", height: "15px" }}
                        src={locationicon}
                    />
                    &nbsp;
                    <p style={{ fontSize: "14px", color: "black" }}>Noida, India</p>
                </div>
                <button
                    style={{
                        borderRadius: "8px",
                        color: "#02B875",
                        borderColor: "#A9AEB8",
                    }}
                    type="button"
                    className="btn w-100"
                >
                    Apply on Timesjobs
                </button>
                <br />
                <br />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    {largerDevice ? (
                        <>
                            <div style={{ display: "flex" }}>
                                <img
                                    style={{ width: "40px", height: "40px" }}
                                    src={sampleProfile}
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
                                    Joseph Gray
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
                                    src={sampleProfile}
                                    alt="user1"
                                />
                                &nbsp;&nbsp;
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <h6 style={{ fontSize: "15px", fontWeight: "700" }}>
                                        Joseph Gray
                                    </h6>
                                    <p
                                        style={{
                                            fontSize: "15px",
                                            color: "#525252",
                                            marginTop: "-8px",
                                            marginBottom: "0px",
                                        }}
                                    >
                                        1.7k views
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

export default JobCard;
