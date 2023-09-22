import React from "react";
import BannerBackground from "../../assets/resources/home-banner-background.png";
import BannerImage from "../../assets/resources/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import { Navbar } from "../../assets/components/NavBar";

const HomeElement = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Innovative learning platform
          </h1>
          <p className="primary-text">
          "A journey of a thousand miles begins with a single step."—Sun Tzu.
          </p>
          <button className="secondary-button">
            Book slot <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeElement;
