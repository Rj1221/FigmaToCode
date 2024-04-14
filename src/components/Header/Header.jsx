import React from "react";
import "./Header.css";
import { Logo, SearchIcon, sampleProfile } from "../../assets/images/index.js";
const Header = ({ loggedIn, largerDevice }) => {
    return (
        <>
            {largerDevice && (
                <div className="navbar">
                    <h5 className="logo">
                        <span style={{ color: "#27A365" }}>ATG.</span>W
                        <span>
                            <img style={{ marginBottom: "5px" }} alt="O" src={Logo} />
                        </span>
                        RLD
                    </h5>
                    <div
                        style={{
                            width: "360px",
                            paddingTop: "15px",
                            paddingBottom: "15px",
                        }}
                        className="input-group flex-nowrap"
                    >
                        <span
                            style={{
                                borderBottomLeftRadius: "21px",
                                borderTopLeftRadius: "21px",
                                backgroundColor: "#F2F2F2",
                                border: "none",
                            }}
                            className="input-group-text"
                            id="addon-wrapping"
                        >
                            <img alt="search" src={SearchIcon} />
                        </span>
                        <input
                            style={{
                                fontSize: "13px",
                                borderTopRightRadius: "21px",
                                borderBottomRightRadius: "21px",
                                backgroundColor: "#F2F2F2",
                                border: "none",
                            }}
                            type="text"
                            className="form-control"
                            placeholder="Search for your favourite groups in ATG"
                            aria-describedby="addon-wrapping"
                        />
                    </div>
                    <div
                        style={{
                            marginRight: "3%",
                            width: "200px",
                            paddingTop: "15px",
                            paddingBottom: "15px",
                        }}
                        className="btn-group"
                    >
                        {loggedIn ? (
                            <>
                                <button
                                    className="btn btn-sm"
                                    type="button"
                                    style={{ textAlign: "right" }}
                                >
                                    <div style={{ display: "flex" }}>
                                        <img
                                            style={{
                                                marginTop: "-4px",
                                                width: "40px",
                                                height: "40px",
                                            }}
                                            src={sampleProfile}
                                            alt="profile pic"
                                        />
                                        &nbsp;&nbsp;
                                        <p style={{ marginTop: "5px", marginBottom: 0 }}>
                                            Siddharth Goyal
                                        </p>
                                    </div>
                                </button>
                                <button
                                    disabled
                                    type="button"
                                    className="btn btn-sm dropdown-toggle dropdown-toggle-split border-none"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    data-bs-toggle="modal"
                                    data-bs-target="#createaccountmodal"
                                    className="btn btn-sm"
                                    type="button"
                                    style={{ textAlign: "right" }}
                                >
                                    Create account.
                                    <span style={{ color: "blue" }}> It's free!</span>
                                </button>
                                <button
                                    disabled
                                    type="button"
                                    className="btn btn-sm dropdown-toggle dropdown-toggle-split border-none"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
