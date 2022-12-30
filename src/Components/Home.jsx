import React from "react";
import images from "../images/DSC_1523 5.jpg";
import { FaTh } from "react-icons/fa";

const Home = () => {
  return (
    <div className="main">
      <div className="header_secation">
        <div className="text">
          <a href="https://mail.google.com">Gmail</a>
          <a href="https://www.google.com.bd/imghp?hl=en&tab=ri&authuser=0&ogbl">
            Images
          </a>
        </div>
        <div className="icons_images">
          <div className="icon">
            <FaTh></FaTh>
          </div>
          <div className="image">
            <img src={images} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
