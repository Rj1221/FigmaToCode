import React from "react";
import { Banner, backArrow } from "../../assets/images";
import "./Section.css";
const Section = ({ largerDevice, smallerDevice, loggedIn, onLoginChange }) => {
    return (
        <>
            <div style={{ backgroundColor: "black" }}>
                <img
                    alt="banner"
                    src={Banner}
                    style={{
                        width: "100%",
                        height: largerDevice ? "440px" : smallerDevice ? "300px" : "200px",
                        marginTop: largerDevice ? "72px" : "",
                        opacity: "0.5",
                        objectFit: "cover",
                    }}
                />
                <h2
                    className="celabel"
                    style={{
                        fontSize: smallerDevice ? "" : "18px",
                        fontWeight: "700",
                        color: "white",
                        position: "absolute",
                        marginTop: largerDevice
                            ? "-150px"
                            : smallerDevice
                                ? "-100px"
                                : "-70px",
                    }}
                >
                    Computer Engineering
                </h2>
                <p
                    className="celabel2"
                    style={{
                        fontSize: smallerDevice ? "" : "12px",
                        color: "white",
                        position: "absolute",
                        marginTop: largerDevice
                            ? "-110px"
                            : smallerDevice
                                ? "-65px"
                                : "-40px",
                    }}
                >
                    142,765 Computer Engineers follow this
                </p>
                {!largerDevice && (
                    <>
                        <p>
                            <img
                                alt="back"
                                src={backArrow}
                                style={{
                                    cursor: "pointer",
                                    position: "absolute",
                                    marginTop: smallerDevice ? "-275px" : "-183px",
                                    marginLeft: "3.75%",
                                }}
                            />
                        </p>
                        {loggedIn ? (
                            <button
                                onClick={() => onLoginChange(false)}
                                style={{
                                    position: "absolute",
                                    borderColor: "white",
                                    color: "white",
                                    borderRadius: "4px",
                                    marginTop: smallerDevice ? "-298px" : "-205px",
                                    right: "0",
                                    marginRight: "3.75%",
                                }}
                                className="btn btn-sm"
                                type="button"
                            >
                                Leave Group
                            </button>
                        ) : (
                            <button
                                style={{
                                    position: "absolute",
                                    borderColor: "white",
                                    color: "white",
                                    borderRadius: "4px",
                                    marginTop: smallerDevice ? "-298px" : "-205px",
                                    right: "0",
                                    marginRight: "3.75%",
                                }}
                                onClick={() => onLoginChange(true)}
                                data-bs-toggle="offcanvas"
                                data-bs-target="#createaccountcanvas"
                                aria-controls="offcanvasBottom"
                                className="btn btn-sm"
                                type="button"

                            >
                                Join Group
                            </button>
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export default Section;
