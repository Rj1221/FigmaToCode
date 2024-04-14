import React from "react";
import "./Home.css";
import { groupicon, leaveicon } from "../../assets/images";

const Home = ({ largerDevice, loggedIn, handleLoginChange }) => {
    return (
        <>
            <div className="whole">
                {largerDevice ? (
                    <nav
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "row",
                        }}
                        className="nav"
                    >
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <a
                                style={{ color: "black" }}
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                All Posts(32)
                            </a>
                            <a style={{ color: "#8A8A8A" }} className="nav-link" href="#">
                                Article
                            </a>
                            <a style={{ color: "#8A8A8A" }} className="nav-link" href="#">
                                Event
                            </a>
                            <a style={{ color: "#8A8A8A" }} className="nav-link" href="#">
                                Education
                            </a>
                            <a style={{ color: "#8A8A8A" }} className="nav-link" href="#">
                                Job
                            </a>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div
                                style={{ marginRight: "3%", width: "133px" }}
                                className="btn-group"
                            >
                                <button
                                    className="btn btn-sm"
                                    style={{ backgroundColor: "#EDEEF0" }}
                                    type="button"
                                >
                                    Write a Post
                                </button>
                                <button
                                    type="button"
                                    style={{ borderColor: "#EDEEF0", backgroundColor: "#EDEEF0" }}
                                    className="btn btn-light btn-sm dropdown-toggle dropdown-toggle-split"
                                ></button>
                            </div>
                            {loggedIn ? (
                                <button
                                    onClick={() => handleLoginChange(false)}
                                    style={{
                                        width: "134px",
                                        color: "#6A6A6B",
                                        borderColor: "#6A6A6B",
                                    }}
                                    className="btn btn-sm"
                                    type="button"
                                >
                                    <span>
                                        <img
                                            style={{ marginTop: "-2px" }}
                                            alt="->"
                                            src={leaveicon}
                                        />
                                    </span>{" "}
                                    &nbsp; Leave Group
                                </button>
                            ) : (
                                <button
                                    onClick={() => handleLoginChange(true)}
                                    style={{ width: "134px" }}
                                    data-bs-toggle="modal"
                                    data-bs-target="#createaccountmodal"
                                    className="btn btn-sm btn-primary"
                                    type="button"
                                >
                                    <span>
                                        <img alt="+" src={groupicon} />
                                    </span>{" "}
                                    &nbsp; Join Group
                                </button>
                            )}
                        </div>
                    </nav>
                ) : (
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <p style={{ fontWeight: "600", marginLeft: "3.75%" }}>Posts(368)</p>
                        <button
                            style={{
                                marginBottom: "10px",
                                marginTop: "-10px",
                                marginRight: "3.75%",
                                backgroundColor: "#F1F3F5",
                                color: "black",
                            }}
                            className="btn dropdown-toggle"
                            type="button"
                        >
                            Filter: All
                        </button>
                    </div>
                )}
            </div>
            {largerDevice && <hr className='dividerhr' />}
        </>
    );
};

export default Home;
