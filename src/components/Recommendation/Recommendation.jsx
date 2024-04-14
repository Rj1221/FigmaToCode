import React from "react";
import { likeicon } from "../../assets/images";

const Recommendations = ({ follow_groups, Updating_follow_grp }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <br />
            <br />
            <h6>
                <img style={{ marginTop: "-5px" }} src={likeicon} /> RECOMMENDED GROUPS
            </h6>
            {follow_groups?.map((group, index) => (
                <div key={index}>
                    <br />
                    <div
                        style={{ display: "flex", justifyContent: "space-between" }}
                    >
                        <div style={{ display: "flex" }}>
                            <img
                                style={{ width: "40px", height: "40px" }}
                                src={group[0]}
                                alt={`group_${index}`}
                            />
                            &nbsp;&nbsp;
                            <h6
                                style={{
                                    fontSize: "15px",
                                    fontWeight: "600",
                                    marginTop: "10px",
                                }}
                            >
                                {group[1]}
                            </h6>
                        </div>
                        <button
                            onClick={() => Updating_follow_grp(group[1])}
                            type="button"
                            style={{
                                backgroundColor: group[2] ? "black" : "#EDEEF0",
                                borderRadius: "21px",
                                color: group[2] ? "white" : "black",
                                width: group[2] ? "100px" : "85px",
                                height: "30px",
                                marginTop: "6px",
                                paddingTop: "2px",
                            }}
                            className="btn"
                        >
                            {group[2] ? "Followed" : "Follow"}
                        </button>
                    </div>
                </div>
            ))}
            <br />
            <br />
            <br />
            <p
                style={{
                    color: "#2F6CE5",
                    fontSize: "13px",
                    textAlign: "right",
                }}
            >
                See More...
            </p>
        </div>
    );
};

export default Recommendations;
