import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import userImage from "../../assets/images/userImage.png";
import SubHeader from "../../Component/subHeader";
import StoriesList from "../../Component/storiesList";
import { myHugs, profile } from "../../routes/routesPath";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("profile");

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <section className="storiesListContainer">
        <div className="subHeaderContainer bg-primary pb-1">
          <SubHeader />
        </div>

        <div className="profileContainer d-flex ">
          <div className="profileOptions bg-primary">
            <div className="text-white text-center ">
              <img src={userImage} className="userImage my-3 img-fluid" />
              <p className="m-0">Manish Mittal</p>
              <p className="muted small m-0" style={{ lineHeight: "12px" }}>
                test@gmail.com
              </p>
            </div>
            <div className="profileItemsList text-white mt-3">
              <p
                className="mx-2 mb-0 py-2 d-flex align-items-center justify-content-between border-bottom"
                onClick={() => handleActiveTab("profile")}
              >
                <span>My Stories</span>
                <span>
                  <IoIosArrowForward />
                </span>
              </p>
              <p
                className="mx-2 mb-0 py-2 d-flex align-items-center justify-content-between border-bottom"
                onClick={() => handleActiveTab("replies")}
              >
                <span>My Replies</span>
                <span>
                  <IoIosArrowForward />
                </span>
              </p>
              <p
                className="mx-2 mb-0 py-2 d-flex align-items-center justify-content-between border-bottom"
                onClick={() => handleActiveTab("hugs")}
              >
                <span>Hugs</span>
                <span>
                  <IoIosArrowForward />
                </span>
              </p>
              <p
                className="mx-2 mb-0 py-2 d-flex align-items-center justify-content-between border-bottom"
                onClick={() => handleActiveTab("editProfile")}
              >
                <span>Edit Profile</span>
                <span>
                  <IoIosArrowForward />
                </span>
              </p>
            </div>
          </div>
          <div>
            <StoriesList className="profileStoriesList" darkPagination={true} />
          </div>
        </div>

        {/* <div className="curvatureContainer">
          <div>
            <div id="curved-corner-topright" />
          </div>
          <div>
            <div id="curved-corner-topleft" />
          </div>
        </div>
*/}

        {/* <div className="curvatureContainer lowerCurvatureContainer">
          <div>
            <div id="curved-corner-bottomright" className="curvedCorner" />
          </div>
          <div>
            <div id="curved-corner-bottomleft" className="curvedCorner" />
          </div>
        </div> */}
      </section>
    </>
  );
}
