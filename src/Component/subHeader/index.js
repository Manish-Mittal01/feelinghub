import React from "react";
import { addStory } from "../../routes/routesPath";
import { useNavigate } from "react-router-dom";

export default function SubHeader() {
  const navigate = useNavigate();

  return (
    <div className="storiesListHeader py-3  px-lg-5 px-4">
      <div className="d-flex align-items-center justify-content-between">
        <h4>Express your feelings</h4>
        <button className="outlineBtn">Start Expressing</button>
        {/* <div className="text-center">
          <h4>Express your feelings</h4>
          <button className="outlineBtn" onClick={() => navigate(addStory)}>
            Start Expressing
          </button>
        </div>
        <div className="text-center">
          <h4>Donate to help others</h4>
          <button className="outlineBtn">Donate</button>
        </div> */}
      </div>
    </div>
  );
}
