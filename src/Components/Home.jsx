import React, { useState } from "react";
import images from "../images/DSC_1523 5.jpg";
import { FaSearch, FaTh } from "react-icons/fa";
import googleS from "../images/ggg.png";
import { CgMenuGridO } from "react-icons/cg";
import voiceImage from "../images/googlemic_clr_24px.svg";

const Home = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const search = (e) => {
    e.preventDefault();
    if (searchValue) {
      props.history.push(`/search?q=${searchValue}`);
    }
  };

  const keyPress = (e) => {
    if (e.key === "Enter") {
      if (searchValue) {
        props.history.push(`/search?q=${searchValue}`);
      }
    }
  };

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
            <CgMenuGridO />
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
            <input
              onKeyPress={keyPress}
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              className="form-control"
              name=""
              id=""
            />
          </div>
          <div className="voice">
            <span>
              <img src={voiceImage} alt="" />
            </span>
          </div>
        </div>
        <div className="search_btn">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button className="btn">
            <a href="">I,m feeling Lucky</a>
          </button>
        </div>
      </div>
      <div className="lang">
        Google offered in: <a href=""> বাংলা</a>
      </div>
      <div className="footer">
        <div className="footer_top">Bangladesh</div>
        <div className="footer_bottom">
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Advertising</a>
            </li>
            <li>
              <a href="">Business</a>
            </li>
            <li>
              <a href="">How Search works</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Terms</a>
            </li>
            <li>
              <a href="">Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
