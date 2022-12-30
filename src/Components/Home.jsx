import React from "react";
import images from "../images/DSC_1523 5.jpg";
import { FaMicrophone, FaSearch, FaTh, FaVoicemail } from "react-icons/fa";
import googleS from "../images/ggg.png";
import voiceImage from "../images/googlemic_clr_24px.svg";

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
      <div className="google_image">
        <img src={googleS} alt="google" />
      </div>
      <div className="search_secation">
        <div className="icon_search">
          <div className="search_icon">
            <span>
              <FaSearch></FaSearch>
            </span>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="" id="" />
          </div>
          <div className="voice">
            <span>
              <img src={voiceImage} alt="" />
            </span>
          </div>
        </div>
        <div className="search_btn">
          <button className="btn">Google Search</button>
          <button className="btn">
            <a href="">I,m feeling Lucky</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
