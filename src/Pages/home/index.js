import React from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import banner from "../../assets/images/homeBanner.jpg";
import storyImage from "../../assets/images/storyImage.png";
import StoryCard from "./components/storyCard";
import MyCrousel from "../../Component/myCrousel";

export default function Home() {
  const crouselSettings = {
    countPerRow: 2,
    leftIconClassName: "homeCrouselLeftIcon",
    rightIconClassName: "homeCrouselRightIcon",
    responsive: [
      { breakPoint: 576, countPerRow: 2 },
      { breakPoint: 768, countPerRow: 3 },
      { breakPoint: 992, countPerRow: 4 },
    ],
  };

  return (
    <>
      <section className="home">
        <div className="homeBanner py-5 px-lg-5 px-4">
          <h2>Join Us Today</h2>
          <p className="bannerDesc">
            Feelinghub is a unique platform where you can share your feelings, emotions, and
            problems with others, either anonymously or with your identity revealed. Receive support
            from our community or our admin team. Explore our programs and sign up now!
          </p>
          <img src={banner} className="img-fluid" />
        </div>

        <div className="homeBanner insightsContainer emotionalInsights px-4 px-lg-5 ">
          <h1 className="homeStroiesHeading pt-5 pb-4">Emotional Insights</h1>
          <MyCrousel {...crouselSettings}>
            {Array.from({ length: 10 }).map((_, i) => (
              <StoryCard index={i} />
            ))}
          </MyCrousel>
        </div>
        <div className="homeBanner insightsContainer happyInsights px-4 px-lg-5 ">
          <h1 className="homeStroiesHeading pt-5 pb-4">Happy Vibes</h1>
          <MyCrousel {...crouselSettings}>
            {Array.from({ length: 10 }).map((_, i) => (
              <StoryCard index={i} />
            ))}
          </MyCrousel>
        </div>
        <div className="homeBanner insightsContainer loveInsights px-4 px-lg-5 ">
          <h1 className="homeStroiesHeading pt-5 pb-4">Love Birds</h1>
          <MyCrousel {...crouselSettings}>
            {Array.from({ length: 10 }).map((_, i) => (
              <StoryCard index={i} />
            ))}
          </MyCrousel>
        </div>
        <div className="homeBanner insightsContainer angerInsights px-4 px-lg-5 ">
          <h1 className="homeStroiesHeading pt-5 pb-4">Angry Fairies</h1>
          <MyCrousel {...crouselSettings}>
            {Array.from({ length: 10 }).map((_, i) => (
              <StoryCard index={i} />
            ))}
          </MyCrousel>
        </div>

        <div className="curvatureContainer">
          <div>
            <div id="curved-corner-topright" />
          </div>
          <div>
            <div id="curved-corner-topleft" />
          </div>
        </div>

        <div className="ourStory py-5 px-4 px-lg-5">
          <div className="content">
            <h2 className="mb-5">Our Story</h2>
            <p className="bannerDesc mb-5">
              Established in 2023 to meet the community's growing needs, Feelinghub is a distinctive
              Community Service Program providing a fulfilling and interactive experience for all
              participants. We embrace our responsibilities by offering inclusive programs
              accessible to individuals from diverse backgrounds, constantly working towards our
              mission.
            </p>
          </div>
          <Row className="align-items-center">
            <Col md={6} className="d-flex justify-content-center">
              <img src={storyImage} className="img-fluid" />
            </Col>
            <Col md={6}>
              <p className="bannerDesc my-5">
                Established in 2023 to meet the community's growing needs, Feelinghub is a
                distinctive Community Service Program providing a fulfilling and interactive
                experience for all participants. We embrace our responsibilities by offering
                inclusive programs accessible to individuals from diverse backgrounds, constantly
                working towards our mission.
              </p>
            </Col>
          </Row>
        </div>

        <div className="ourMission py-5 px-4 px-lg-5">
          <Row className="align-items-center">
            <Col md={6} className="d-flex justify-content-center">
              <div className="content">
                <h2 className="mb-5">Our Mission</h2>
                <p className="bannerDesc mb-5">
                  Welcome to Feelinghub, where we believe in the power of sharing emotions and
                  experiences. Founded in 2023, our innovative Community Service Program aims to
                  inspire individuals to open up, connect, and grow. Join us on a journey of
                  self-discovery and meaningful connections.
                </p>
              </div>
            </Col>
            <Col md={6} className="text-end">
              <img src={storyImage} className="img-fluid" />
            </Col>
          </Row>
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
