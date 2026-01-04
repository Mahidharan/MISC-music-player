import React from "react";
import "./header.css";
import search from "../assets/search.png";
export default function Header() {
  return (
    <div className="header">
      <div className="header-text">MISC</div>
      <div className="header-search">
        <div className="header-search-image-div">
          <img
            src={search}
            alt="search-image"
            className="header-search-image"
          />
        </div>
        <div className="header-search-box-div">
          <form action="/search" method="get">
            <input
              type="text"
              className="header-search-box"
              placeholder="Search by artists, songs or albums"
            />
          </form>
        </div>
      </div>
      <div className="header-channel">My channel</div>

      <div className="header-account"></div>
    </div>
  );
}
