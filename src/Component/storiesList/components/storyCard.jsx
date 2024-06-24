import React from "react";
import { BsReply } from "react-icons/bs";
import { ReactComponent as HugIcon } from "../../../assets/icons/hug.svg";
import userImageGirl from "../../../assets/images/userImage-girl.png";
import userImage from "../../../assets/images/userImage.png";
import { getFeeling } from "../../../utils/constants";
import { useNavigate } from "react-router-dom";
import { storyDetails } from "../../../routes/routesPath";

export default function StoryCard() {
  const navigate = useNavigate();

  return (
    <div className="storyCard pointer px-3 py-4" onClick={() => navigate(`${storyDetails}/1`)}>
      <div className="d-flex align-items-center">
        <img src={userImage} className="userImage img-fluid" />
        <div className="ms-2">
          <p className="my-0">Manish Mittal</p>
          <p className="muted small my-0">Posted At: 16 jun, 2002</p>
        </div>
      </div>

      <h4 className="my-3">Hello there</h4>
      <div className="storyDesc">
        {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deserunt ducimus eligendi
        quibusdam ipsa expedita et officia iste architecto! Impedit dignissimos, vitae voluptates
        labore modi consectetur aliquid nam nulla quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deserunt ducimus eligendi
        quibusdam ipsa expedita et officia iste architecto! Impedit dignissimos, vitae voluptates
        labore modi consectetur aliquid nam nulla quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deserunt ducimus eligendi
        quibusdam ipsa expedita et officia iste architecto! Impedit dignissimos, vitae voluptates
        labore modi consectetur aliquid nam nulla quas`.slice(0, 250)}
        ...
        <div className="storyAction d-flex align-items-center justify-content-start my-3">
          <p>
            <span>{getFeeling("sad")?.icons?.regular}</span>
            Sad
          </p>
          <p>
            <span>
              <BsReply />
            </span>
            Reply (10)
          </p>
          <p>
            <span>
              <HugIcon />
            </span>
            hug (35)
          </p>
        </div>
      </div>
    </div>
  );
}
