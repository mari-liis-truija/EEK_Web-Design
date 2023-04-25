import React from "react";
import Trailer1 from "../Assets/open-trailer.jpg";
import Trailer2 from "../Assets/enclosed-cargo-trailer.jpg";
import Trailer3 from "../Assets/dump-trailer.jpg";
import { FiArrowRight } from "react-icons/fi";

const Trailers = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Trailers</p>
        <h1 className="primary-heading">Rentable Trailers</h1>
        <p className="primary-text">
          At TrailerWise, we offer a variety of high-quality trailers for rent, 
          designed to meet a range of hauling needs.
        </p>
      </div>
      <div className="trailers-section-bottom">
        <img src={Trailer1} alt="" />
        <h2>Open Small Trailer</h2>
        <p>
          Our 4x5 open small trailer is perfect for hauling small loads, equipment, 
          or materials. With a sturdy steel frame and a weight capacity of up to 816 
          kilograms, this trailer is both durable and versatile. This trailer is also 
          lightweight and easy to tow, making it a great choice for a variety of projects.
        </p>
        <p>Price starts from <strong>20€/per day</strong></p>
        <button className="secondary-button">
            Book Now <FiArrowRight />{" "}
        </button>
      </div>

      <div className="trailers-section-bottom">
        <img src={Trailer2} alt="" />
        <h2>Enclosed Cargo Trailer</h2>
        <p>
        For larger loads or items that require protection from the elements, our 7x14 
        enclosed cargo trailer is an excellent choice. With a rear ramp door, side entry 
        door, and a payload capacity of up to 2,268 kilograms, this trailer is ideal for 
        transporting furniture, appliances, or other bulky items.
        </p>
        <p>Price starts from <strong>50€/per day</strong></p>
        <button className="secondary-button">
            Book Now <FiArrowRight />{" "}
        </button>
      </div>

      <div className="trailers-section-bottom">
        <img src={Trailer3} alt="" />
        <h2>Dump Trailer</h2>
        <p>
        Need to move heavy materials like dirt, gravel, or sand? Our 6x12 dump trailer is the 
        perfect solution. With a hydraulic lift system and a weight capacity of up to 2,268 kilograms, 
        this trailer makes it easy to load and unload your materials quickly and efficiently.
        </p>
        <p>Price starts from <strong>80€/per day</strong></p>
        <button className="secondary-button">
            Book Now <FiArrowRight />{" "}
        </button>
      </div>
    </div>
  );
};

export default Trailers;
