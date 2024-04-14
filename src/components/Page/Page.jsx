import React, { useState } from "react";
import {
    rec1,
    rec2,
    menuicon,
    u1,
    u2,
    shareicon,
    rec4,
    rec5,
    rec6,
    rec7,
    float,

} from "../../assets/images";
import ArticleCard from "../Card/Card";
import MeetupCard from "../Card/MeetupCard";
import JobCard from "../Card/JobCard";
import Recommendations from "../Recommendation/Recommendation";
import LocationInput from "../LocationInfo/LocationInfo";
import InfoMessage from "../InfoMessage/InfoMessage";
import SignUpModal from "../Modal/SignUpModal";
import SignInComponent from "../SignIn/SignIn";
import MobileResponsiveComponent from "../MobileResponsive/MobileResponsive";
import OffcanvasComponent from "../MobileResponsive/OffCanvasComponent";
const Page = ({ largerDevice, loggedIn, onLoginChange }) => {
    const [location_edit_enabled, setLocation_edit_enabled] = useState(false);
    const [location_update, setLocation_update] = useState("Noida, India");
    const [follow_groups, setFollow_groups] = useState([
        [rec4, "Leisure", false],
        [rec5, "Activism", false],
        [rec6, "MBA", false],
        [rec7, "Philosophy", false],
    ]);
    const Updating_follow_grp = (clicked_group) => {
        setFollow_groups((prevGroups) =>
            prevGroups.map((group) =>
                group[1] === clicked_group ? [group[0], group[1], !group[2]] : group
            )
        );
    };

    return (
        <>
            <div className="wholeleft">
                <div
                    style={{
                        width: largerDevice ? "50%" : "100%",
                        overflowY: "scroll",
                        height: largerDevice ? "83vh" : "94vh",
                    }}
                >
                    <ArticleCard
                        name="Sarthak Kamra"
                        description={
                            "What if famous brands had regular fonts? Meet RegulaBrands!"
                        }
                        usericon={u1}
                        shareicon={shareicon}
                        largerDevice={largerDevice}
                        menuicon={menuicon}
                        recimage={rec1}
                        category={"Article"}
                        categoryIcon={"&#9997;"}
                        alt={"First Image"}
                    />
                    <br />
                    <ArticleCard
                        name="Sarah West"
                        usericon={u2}
                        shareicon={shareicon}
                        largerDevice={largerDevice}
                        menuicon={menuicon}
                        recimage={rec2}
                        category={"Education"}
                        description={
                            "Tax Benefits for Investment under National Pension Scheme launched by Government"
                        }
                        categoryIcon={"&#128300;"}
                        alt={"Second Image"}
                    />
                    <br />
                    <MeetupCard largerDevice={largerDevice} />
                    <br />
                    <JobCard largerDevice={largerDevice} />
                    <br />
                    <br />
                    <br />
                </div>
                {largerDevice && (
                    <div className="wholeright">
                        <br />
                        <LocationInput
                            location_edit_enabled={location_edit_enabled}
                            setLocation_edit_enabled={setLocation_edit_enabled}
                            location_update={location_update}
                            setLocation_update={setLocation_update}
                        />
                        <br />
                        <InfoMessage />
                        <div style={{ display: !loggedIn && "none" }}>
                            <Recommendations
                                follow_groups={follow_groups}
                                Updating_follow_grp={Updating_follow_grp}
                            />
                        </div>
                    </div>
                )}
            </div>
            <SignUpModal onLoginChange={onLoginChange} />
            <SignInComponent onLoginChange={onLoginChange} />
            <MobileResponsiveComponent onLoginChange={onLoginChange} />
            <OffcanvasComponent onLoginChange={onLoginChange} />
            {!largerDevice && <a href='#' style={{ position: 'fixed', right: '10px', bottom: '10px' }}><img style={{ cursor: 'pointer' }} alt='float' src={float} /></a>}
        </>
    );
};

export default Page;

