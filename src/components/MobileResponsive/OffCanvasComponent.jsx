import React from "react";
import { fblogo, glogo, canvascloseicon } from "../../assets/images";

const OffcanvasComponent = ({ onLoginChange }) => {
    return (
        <div
            style={{ borderRadius: "8px 8px 0px 0px", height: "500px" }}
            className="offcanvas offcanvas-bottom"
            tabIndex="-1"
            id="signupcanvas"
            aria-labelledby="offcanvasBottomLabel"
        >
            <div className="offcanvas-header">
                <h3
                    style={{
                        fontWeight: "700",
                        marginTop: "5px",
                        marginBottom: "-5px",
                    }}
                >
                    Welcome back!
                </h3>
                <button
                    style={{ marginBottom: "-5px" }}
                    type="button"
                    className="btn text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                >
                    <img alt="close" src={canvascloseicon} />
                </button>
            </div>
            <div className="offcanvas-body">
                <input
                    style={{
                        height: "45px",
                        borderRadius: "0px",
                        backgroundColor: "#F7F8FA",
                    }}
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    aria-describedby="addon-wrapping"
                />
                <input
                    style={{
                        height: "45px",
                        borderTop: "none",
                        borderRadius: "0px",
                        backgroundColor: "#F7F8FA",
                    }}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    aria-describedby="addon-wrapping"
                />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <button
                        onClick={() => onLoginChange(true)}
                        data-bs-dismiss="offcanvas"
                        style={{
                            height: "45px",
                            marginTop: "15px",
                            borderRadius: "25px",
                            width: "100%",
                        }}
                        type="button"
                        className="btn btn-primary w-50"
                    >
                        Sign In
                    </button>
                    <p
                        data-bs-toggle="offcanvas"
                        data-bs-target="#createaccountcanvas"
                        data-bs-dismiss="offcanvas"
                        style={{
                            color: "#495057",
                            textDecoration: "underline",
                            cursor: "pointer",
                            marginTop: "25px",
                            marginBottom: "5px",
                        }}
                    >
                        or, Create Account
                    </p>
                </div>
                <br />
                <button
                    onClick={() => onLoginChange(true)}
                    data-bs-dismiss="offcanvas"
                    style={{
                        height: "40px",
                        marginBottom: "10px",
                        width: "100%",
                        borderColor: "#D9D9DB",
                    }}
                    className="btn btn-sm"
                    type="button"
                >
                    <img alt="fb sign up" src={fblogo} />
                </button>
                <button
                    onClick={() => onLoginChange(true)}
                    data-bs-dismiss="offcanvas"
                    style={{
                        height: "40px",
                        marginBottom: "20px",
                        width: "100%",
                        borderColor: "#D9D9DB",
                    }}
                    className="btn btn-sm"
                    type="button"
                >
                    <img alt="google sign up" src={glogo} />
                </button>
                <p
                    style={{
                        fontWeight: "600",
                        fontSize: "12px",
                        textAlign: "center",
                        margin: "0px 40px 0px 40px",
                    }}
                >
                    Forgot Password?
                </p>
            </div>
        </div>
    );
};

export default OffcanvasComponent;
