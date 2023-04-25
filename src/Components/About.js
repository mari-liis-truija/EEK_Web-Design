import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          We Make Trailer Rent Easy As 1-2-3
        </h1>
        <p className="primary-text">
          At TrailerWise, we pride ourselves on providing our customers 
          with high-quality trailers and exceptional service. Whether you 
          need to rent a trailer for a weekend getaway or purchase a trailer 
          for your business, we have the expertise and resources to help you 
          find the perfect fit. 
        </p>
        <p className="primary-text">
          Trust TrailerWise to be your go-to source for all your trailer needs.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
