import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import CKEditor from "react-ckeditor-component";
import { IoIosShareAlt } from "react-icons/io";
import storyImage from "../../assets/images/storyImage.png";
import { feelingOptions } from "../../utils/constants";

export default function AddStory() {
  return (
    <>
      <section className="storiesListContainer">
        <div className="py-4 px-4 px-lg-5">
          <h5 className="my-3 text-center">Write How You're Feeling</h5>
          <div className="addStoryWrapper p-3 p-lg-4 px-lg-5">
            <div className="my-2">
              <label>Short title</label>
              <input
                className="myInput form-control"
                placeholder="What is your feeling about?"
                min={20}
                max={100}
                name="title"
              />
            </div>
            <div className="my-2">
              <label>Describe your Feeling</label>
              <CKEditor
                activeClass="p10"
                config={{
                  placeholder: "Describe your feeling/emotions",
                  toolbar: [
                    {
                      name: "basicstyles",
                      items: ["Bold", "Italic"],
                    },
                    {
                      name: "paragraph",
                      items: ["NumberedList", "BulletedList"],
                    },
                    { name: "links", items: ["Link", "Unlink"] },
                    {
                      name: "insert",
                      items: ["Image", "HorizontalRule"],
                    },
                    { name: "styles", items: ["Styles", "Format", "Font", "FontSize"] },
                    { name: "colors", items: ["TextColor", "BGColor"] },
                    { name: "tools", items: ["Maximize"] },
                  ],
                }}
                content={""}
                events={{
                  // afterPaste: this.afterPaste,
                  change: (evt) => {
                    console.log("evt", evt.editor.getData());
                  },
                }}
              />
            </div>
            <div className="my-2">
              <label>Select your Feeling</label>
              <div className="feelingContainer d-flex align-items-center">
                {feelingOptions.map((feeling) => (
                  <div>
                    <p className="mb-0">{feeling.icons?.regular}</p>
                    <p className="small mb-0">{feeling.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-2 d-flex align-items-center">
              <input id="hideYourRealName" className="checkbox pointer me-2" type="checkbox" />
              <label htmlFor="hideYourRealName" className="pointer">
                Hide your real name?
              </label>
            </div>
            <div className="d-flex justify-content-center">
              <button className="primaryBtn mt-2 px-5">Express your Feeling</button>
            </div>
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
