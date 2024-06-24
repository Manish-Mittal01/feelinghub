import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { IoIosShareAlt } from "react-icons/io";
import { BiSolidDonateHeart } from "react-icons/bi";
import { BsReply } from "react-icons/bs";
import { ReactComponent as HugIcon } from "../../assets/icons/hug.svg";
import storyImage from "../../assets/images/storyImage.png";
import userImageGirl from "../../assets/images/userImage-girl.png";
import SubHeader from "../../Component/subHeader";
import { getFeeling } from "../../utils/constants";

export default function StoryDetails() {
  const [addReply, setAddReply] = useState(null);

  return (
    <>
      <section className="storiesListContainer">
        <SubHeader />

        <div className="homeStoryCard pointer py-4  px-4 px-lg-5">
          <div className="d-flex align-items-center">
            <img src={userImageGirl} className="userImage img-fluid" />
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
              labore modi consectetur aliquid nam nulla quas`}
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
          <div>
            <textarea
              className="myInput form-control mt-4"
              placeholder="Share your thoughts"
              name="reply"
            />
          </div>
          <div className="d-flex justify-content-end">
            <button className="secondaryBtn mt-2">Send</button>
          </div>
        </div>

        <div className="curvatureContainer border-0">
          <div>
            <div id="curved-corner-topright" />
          </div>
          <div>
            <div id="curved-corner-topleft" />
          </div>
        </div>

        <div className="ourMission bg-secondary py-3 px-4 px-lg-5">
          <h2 className="mb-3">Replies</h2>

          {Array.from({ length: 5 }).map((reply, i) => (
            <div className="homeStoryCard pointer px-5 py-3 ">
              <div className="d-flex align-items-center">
                <img src={userImageGirl} className="userImage img-fluid" />
                <div className="ms-2">
                  <p className="my-0">Manish Mittal</p>
                  <p className="muted small my-0">Posted At: 16 jun, 2002</p>
                </div>
              </div>

              <div className="storyDesc mt-2">
                {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deserunt ducimus eligendi
              quibusdam ipsa expedita et officia iste architecto! Impedit dignissimos, vitae voluptates
              labore modi consectetur aliquid nam nulla quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deserunt ducimus eligendi
              quibusdam ipsa expedita et officia iste architecto! Impedit dignissimos, vitae voluptates
              labore modi consectetur aliquid nam nulla quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deserunt ducimus eligendi
              quibusdam ipsa expedita et officia iste architecto! Impedit dignissimos, vitae voluptates
              labore modi consectetur aliquid nam nulla quas`}
                <div className="storyAction d-flex align-items-center justify-content-start my-3">
                  <p onClick={() => setAddReply(i)}>
                    <span>
                      <BsReply />
                    </span>
                    Reply (10)
                  </p>
                </div>
                {addReply === i && (
                  <>
                    <div>
                      <textarea
                        className="myInput form-control mt-4"
                        placeholder="Send your reply"
                        name="reply"
                      />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="secondaryBtn my-2">Send</button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="curvatureContainer lowerCurvatureContainer border-0">
          <div>
            <div id="curved-corner-bottomright" className="curvedCorner" />
          </div>
          <div>
            <div id="curved-corner-bottomleft" className="curvedCorner" />
          </div>
        </div>

        <div className="curvatureContainer border-0">
          <div>
            <div id="curved-corner-topright" />
          </div>
          <div>
            <div id="curved-corner-topleft" />
          </div>
        </div>

        <div className="ourMission bg-secondary py-5 px-4 px-lg-5">
          <Row className="align-items-center">
            <Col md={6} className="d-flex justify-content-center">
              <div className="content">
                <h2 className="mb-5">Help people like you</h2>
                <p className="bannerDesc mb-5">
                  In an age where technology dominates our daily lives. We are dedicated to provide
                  support and resources for those struggling with mental health issues, relationship
                  problems, or other challenges by bringing people together. By sharing these
                  platforms with more individuals, we can expand the reach of these communities and
                  ensure that no one feels isolated or alone in their struggles.
                  <br />
                  <ul>
                    <li>Share the community with the people in need.</li>
                    <li>Donate us to reach more people like you.</li>
                  </ul>
                </p>
              </div>
            </Col>
            <Col md={6} className="text-end">
              <img src={storyImage} className="img-fluid" />
            </Col>
          </Row>
          <div className="d-flex align-items-center gap-10">
            <button className="primaryBtn d-flex align-items-center rounded mx-2">
              Share <IoIosShareAlt className="ms-2" />
            </button>
            {/* <button className="primaryBtn d-flex align-items-center rounded">
              Donate <BiSolidDonateHeart className="ms-2" />
            </button> */}
          </div>
        </div>

        <div className="curvatureContainer lowerCurvatureContainer">
          <div>
            <div id="curved-corner-bottomright" className="curvedCorner" />
          </div>
          <div>
            <div id="curved-corner-bottomleft" className="curvedCorner" />
          </div>
        </div>
      </section>
    </>
  );
}
