import React from "react";
import { locationicon, closeicon, editicon } from "../../assets/images";
const LocationInput = ({ location_edit_enabled, setLocation_edit_enabled, location_update, setLocation_update }) => {
    return (
        <div className="input-group flex-nowrap">
            <span
                style={{
                    paddingLeft: "0px",
                    paddingRight: "1px",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                    borderColor: "#B8B8B8",
                    borderBottomLeftRadius: "0px",
                    background: "white",
                }}
                className="input-group-text"
                id="addon-wrapping"
            >
                <img alt="location" src={locationicon} />
            </span>
            <input
                disabled={!location_edit_enabled}
                style={{
                    background: "white",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                    borderColor: "#B8B8B8",
                    color: "black",
                }}
                type="text"
                className="form-control"
                placeholder="Enter your location"
                value={location_update}
                onChange={(e) => {
                    setLocation_update(e.target.value);
                }}
                aria-describedby="addon-wrapping"
            />
            {location_edit_enabled ? (
                <>
                    <span
                        style={{
                            borderTop: "none",
                            borderLeft: "none",
                            borderRight: "none",
                            borderColor: "#B8B8B8",
                            borderBottomRightRadius: "0px",
                            background: "white",
                        }}
                        className="input-group-text"
                        id="addon-wrapping"
                    >
                        <button
                            onClick={() => setLocation_edit_enabled(false)}
                            style={{ marginRight: "-15px" }}
                            type="button"
                            className="btn"
                        >
                            <img
                                style={{ margin: "none" }}
                                alt="location"
                                src={closeicon}
                            />
                        </button>
                    </span>
                </>
            ) : (
                <>
                    <span
                        style={{
                            borderTop: "none",
                            borderLeft: "none",
                            borderRight: "none",
                            borderColor: "#B8B8B8",
                            borderBottomRightRadius: "0px",
                            background: "white",
                        }}
                        className="input-group-text"
                        id="addon-wrapping"
                    >
                        <button
                            onClick={() => setLocation_edit_enabled(true)}
                            style={{ marginRight: "-15px" }}
                            type="button"
                            className="btn"
                        >
                            <img
                                style={{ margin: "none" }}
                                alt="location"
                                src={editicon}
                            />
                        </button>
                    </span>
                </>
            )}
        </div>
    );
};

export default LocationInput;
