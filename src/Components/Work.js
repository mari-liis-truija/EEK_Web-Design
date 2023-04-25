import React from "react";
import ChooseTrailer from "../Assets/choose-trailer.png";
import BookTrailer from "../Assets/book-trailer.png";
import EnjoyTrailer from "../Assets/enjoy-trailer.png";

const Work = () => {
  const workInfoData = [
    {
      image: ChooseTrailer,
      title: "Choose a trailer",
      text: "Browse our selection of trailers online and find the one that fits your needs. Check the availability and pricing for your desired rental period.",
    },
    {
      image: BookTrailer,
      title: "Book a trailer",
      text: "Book a trailer online or over the phone. You'll need to provide some basic information. We'll confirm your booking and provide you with all the necessary information you need for pick-up.",
    },
    {
      image: EnjoyTrailer,
      title: "Enjoy usage",
      text: "Come to our location to pick up your trailer. Our team will provide you with a quick overview of the trailer and answer any questions you may have.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Renting a trailer from TrailerWise is easy and hassle-free. Simply choose a 
          trailer that fits your needs, book it online or over the phone, and enjoy your rental.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
