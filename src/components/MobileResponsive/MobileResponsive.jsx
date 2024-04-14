import React from "react";
import { fblogo, glogo, canvascloseicon } from "../../assets/images";

const MobileResponsiveComponent = ({ onLoginChange }) => {
    return (
        <div
            style={{ borderRadius: "8px 8px 0px 0px", height: "500px" }}
            className="offcanvas offcanvas-bottom"
            tabIndex={-1}
            id="createaccountcanvas"
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
                    Create Account
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
                <div style={{ display: "flex" }}>
                    <input
                        style={{
                            height: "45px",
                            borderRight: "none",
                            borderRadius: "0px",
                            backgroundColor: "#F7F8FA",
                        }}
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        aria-describedby="addon-wrapping"
                    />
                    <input
                        style={{
                            height: "45px",
                            borderRadius: "0px",
                            backgroundColor: "#F7F8FA",
                        }}
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        aria-describedby="addon-wrapping"
                    />
                </div>
                <input
                    style={{
                        height: "45px",
                        borderTop: "none",
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
                <input
                    style={{
                        height: "45px",
                        borderTop: "none",
                        borderRadius: "0px",
                        backgroundColor: "#F7F8FA",
                    }}
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
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
                        Create Account
                    </button>
                    <p
                        data-bs-toggle="offcanvas"
                        data-bs-target="#signupcanvas"
                        data-bs-dismiss="offcanvas"
                        style={{
                            color: "#495057",
                            textDecoration: "underline",
                            cursor: "pointer",
                            marginTop: "25px",
                            marginBottom: "5px",
                        }}
                    >
                        Or   Sign In
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
                        fontSize: "12px",
                        textAlign: "center",
                        margin: "0px 40px 0px 40px",
                    }}
                >
                    By signing up, you agree to our Terms & conditions, Privacy policy
                </p>
            </div>
        </div>
    );
};

export default MobileResponsiveComponent;
