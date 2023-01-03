import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import googles from "../images/googleS.png";
import profile from "../images/DSC_1523 5.jpg";
import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineSetting, AiOutlineSearch } from "react-icons/ai";
import voice from "../images/googlemic_clr_24px.svg";
import image from "../images/download.svg";
import { IoClose } from "react-icons/io5";
import Result from "./Result";
import axios from "axios";

const useQuery = () => {
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  return sp.get("q");
};

const Search = (props) => {
  const apiKey = "AIzaSyACEoOywJtzmnw-teThVXFerR21RsWjQLg";
  const cxKey = "86de32706f83c438f";


  const value = useQuery();
  const [state, setState] = useState(value);

    const [searchData, setSearchData] = useState({
      data: [],
      resultInfo: "",
    });


   const search = () => {
     axios
       .get(
         `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cxKey}&q=${value}`
       )
       .then((res) => {
         setSearchData({
           ...searchData,
           data: res.data.items || [],
           resultInfo: res.data.searchInformation,
         });
       })
       .catch((error) => {
         console.log(error.response.data);
       });
   };

  useEffect(() => {
    search();
  }, [value]);

  const keyPress = (e) => {
    if (e.key === "Enter") {
      if (state) {
        props.history.push(`/search?q=${state}`);
      }
    }
  };

  // const selectHeader = useRef();
  // const selectResult = useRef();

  // window.addEventListener("scroll", () => {
  //   if (selectResult && selectResult.current) {
  //     const height = selectResult.current.offsetTop;
  //     if (window.pageYOffset > height) {
  //       selectHeader.current?.classList.add("sticky");
  //     } else {
  //       selectHeader.current?.classList.remove("sticky");
  //     }
  //   }
  // });

  return (
    <div className="search_main">
      <div className="search_header">
        <div className="img_search_field">
          <div className="logo">
            <Link className="image" to="/">
              <img src={googles} alt="google" />
            </Link>
          </div>
          <div className="search_field">
            <div className="form-group">
              <input
                onKeyPress={keyPress}
                onChange={(e) => setState(e.target.value)}
                value={state}
                type="text"
                className="form-control"
                name=""
                id=""
              />
            </div>
            <div className="action">
              {state && (
                <span onClick={() => setState("")} className="close">
                  <IoClose />
                </span>
              )}
              <span>
                <img src={voice} alt="" />
              </span>
              <span>
                <img
                  style={{ width: "24px", height: "24px" }}
                  src={image}
                  alt=""
                />
              </span>
              <span>
                <AiOutlineSearch />
              </span>
            </div>
          </div>
        </div>
        <div className="img_icons">
          <div className="icon">
            <span>
              <AiOutlineSetting />
            </span>
          </div>
          <div className="icon">
            <span>
              <CgMenuGridO />
            </span>
          </div>
          <div className="icon">
            <div className="image">
              <img src={profile} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="result_show">
        <div className="count">
          <span>
            About {searchData.resultInfo?.formattedTotalResults} results (
            {searchData.resultInfo?.formattedSearchTime})
          </span>
        </div>
        <Result data={searchData.data}></Result>
      </div>
    </div>
  );
};

export default Search;
