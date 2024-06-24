import React from "react";
import banner from "../../../assets/images/homeBanner.jpg";

export default function StoryCard({ index }) {
  return (
    <div className="homeStoryCard py-4">
      <img src={banner} className="img-fluid" />
      <p className="my-3" style={{ fontSize: 12 }}>
        Manish Mittal
      </p>
      <h4>Hello there {index} </h4>
      <p className="storyDesc pb-3">
        {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deserunt ducimus eligendi
        quibusdam ipsa expedita et officia iste architecto! Impedit dignissimos, vitae voluptates
        labore modi consectetur aliquid nam nulla quas.`.slice(0, 150)}
      </p>
    </div>
  );
}
