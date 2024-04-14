import React from "react";
import {
    fblogo,
    glogo,
    abstract,
    modalcloseicon
} from "../../assets/images";

const SignInComponent = ({ onLoginChange }) => {
    return (
        <div
            className="modal fade"
            id="signupmodal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >

            <div className="modal-dialog modal-lg modal-dialog-centered">
                <button
                    className="closebtn"
                    style={{
                        position: "absolute",
                        top: "50px",
                        right: "-25%",
                        zIndex: "1",
                        border: "none",
                        backgroundColor: "transparent",
                    }}
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                >
                    <img alt="close" src={modalcloseicon} />
                </button>
                <div
                    style={{ borderRadius: "8px", border: "none" }}
                    className="modal-content"
                >
                    <div
                        style={{
                            borderTopLeftRadius: "8px",
                            borderTopRightRadius: "8px",
                            border: "none",
                            backgroundColor: "#EFFFF4",
                            color: "#008A45",
                            fontSize: "15px",
                        }}
                        className="modal-header"
                    >
                        <h6
                            style={{ margin: "0 auto" }}
                            className="modal-title"
                            id="exampleModalLabel"
                        >
                            Let's learn, share & inspire each other with our passion for
                            computer engineering. Sign up now 🤘🏼
                        </h6>
                    </div>
                    <div className="modal-body">
                        <div
                            style={{
                                marginLeft: "10px",
                                marginRight: "10px",
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <h3 style={{ fontWeight: "700" }}>Sign In</h3>
                            <p style={{ fontSize: "15px" }}>
                                Don't have an account yet?{" "}
                                <span
                                    data-bs-toggle="modal"
                                    data-bs-target="#createaccountmodal"
                                    data-bs-dismiss="modal"
                                    style={{ cursor: "pointer", color: "blue" }}
                                >
                                    Create new for free!
                                </span>
                            </p>
                        </div>
                        <br />
                        <div
                            style={{
                                marginBottom: "5px",
                                marginLeft: "10px",
                                marginRight: "10px",
                                display: "flex",
                                justifyContent: "space-evenly",
                            }}
                        >
                            <div style={{ width: "50%" }}>
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
                                <button
                                    onClick={() => onLoginChange(true)}
                                    data-bs-dismiss="modal"
                                    style={{
                                        height: "45px",
                                        marginTop: "15px",
                                        borderRadius: "25px",
                                        width: "100%",
                                    }}
                                    type="button"
                                    className="btn btn-primary"
                                >
                                    Create Account
                                </button>
                                <br />
                                <br />
                                <button
                                    onClick={() => onLoginChange(true)}
                                    data-bs-dismiss="modal"
                                    style={{
                                        height: "40px",
                                        marginBottom: "5px",
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
                                    data-bs-dismiss="modal"
                                    style={{
                                        height: "40px",
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
                                        cursor: "pointer",
                                        fontSize: "13px",
                                        fontWeight: "600",
                                        marginTop: "15px",
                                        textAlign: "center",
                                    }}
                                >
                                    Forgot Password?
                                </p>
                            </div>
                            <div style={{ display: "grid", width: "50%" }}>
                                <img
                                    style={{ margin: "0 auto", marginBottom: "-10px" }}
                                    alt="abstract"
                                    src={abstract}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInComponent;
