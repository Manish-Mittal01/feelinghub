import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { IoIosShareAlt } from "react-icons/io";
import { BiSolidDonateHeart } from "react-icons/bi";
import storyImage from "../../assets/images/storyImage.png";
import TransparentSelect from "../../Component/common/transparentSelect";
import { defaultPage, feelingOptions, sortingOptions } from "../../utils/constants";
import SubHeader from "../../Component/subHeader";
import StoriesList from "../../Component/storiesList";

export default function Stories() {
  const feelingFilterOption = (option) => {
    return (
      <div className="d-flex align-items-center">
        <span className="optionIcon me-1">{option.icons?.regular}</span>
        <span>{option.label}</span>
      </div>
    );
  };

  return (
    <>
      <section className="storiesListContainer">
        <SubHeader />
        <div className="storyFilters d-block d-sm-flex align-items-center justify-content-between py-3 px-lg-5 px-4">
          <TransparentSelect
            placeholder="Relevance"
            className="sortingSelect"
            options={sortingOptions}
            formatOptionLabel={feelingFilterOption}
            defaultValue={sortingOptions[0]}
          />
          <TransparentSelect
            placeholder="Filter by Feeling"
            className="storyFilterContainer"
            options={feelingOptions}
            formatOptionLabel={feelingFilterOption}
          />
        </div>

        <StoriesList />

        <div className="curvatureContainer">
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
                <h2 className="mb-5">Help People like you</h2>
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
