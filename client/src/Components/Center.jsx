import React from "react";
import "./center.css";
import play from "../assets/play.png";
import MusicBar from "./MusicBar";

export default function Center() {
  return (
    <div className="center">
      <div className="center-top">
        <div className="center-top-left">
          <div className="center-top-left-top">Playlist of the day</div>
        </div>
        <div className="center-top-middle">Last Played</div>

        <div className="center-top-right">
          <div className="center-top-right-top">Song Name</div>
          <div className="center-top-right-bottom">
            <img
              src={play}
              alt="play"
              className="center-top-right-bottom-play"
            />
          </div>
        </div>
      </div>
      <div className="center-bottom">
        <div className="center-bottom-head">
          <div className="center-bottom-head-left">All Songs</div>
          <div className="center-bottom-head-right">Show All</div>
        </div>
        <div className="center-bottom-songs">
          <div className="center-bottom-songs-info">
            <div className="center-bottom-song1-img"></div>
            <div className="center-bottom-song1-details">
              <div className="center-bottom-song1-details-song">Song Name</div>
              <div className="center-bottom-song1-details-movie">
                Movie Name
              </div>
            </div>
          </div>

          <div className="center-bottom-song1-duration">00:00</div>
        </div>
        <div className="center-bottom-songs">
          <div className="center-bottom-songs-info">
            <div className="center-bottom-song2-img"></div>
            <div className="center-bottom-song2-details">
              <div className="center-bottom-song2-details-song">Song Name</div>
              <div className="center-bottom-song2-details-movie">
                Movie Name
              </div>
            </div>
          </div>

          <div className="center-bottom-song2-duration">00:00</div>
        </div>
        <div className="center-bottom-songs">
          <div className="center-bottom-songs-info">
            <div className="center-bottom-song3-img"></div>
            <div className="center-bottom-song3-details">
              <div className="center-bottom-song3-details-song">Song Name</div>
              <div className="center-bottom-song3-details-movie">
                Movie Name
              </div>
            </div>
          </div>
          <div className="center-bottom-song3-duration">00:00</div>
        </div>
        <div className="center-bottom-songs">
          <div className="center-bottom-songs-info">
            <div className="center-bottom-song4-img"></div>
            <div className="center-bottom-song4-details">
              <div className="center-bottom-song4-details-song">Song Name</div>
              <div className="center-bottom-song4-details-movie">
                Movie Name
              </div>
            </div>
          </div>
          <div className="center-bottom-song4-duration">00:00</div>
        </div>
        <div className="center-bottom-songs">
          <div className="center-bottom-songs-info">
            <div className="center-bottom-song5-img"></div>
            <div className="center-bottom-song5-details">
              <div className="center-bottom-song5-details-song">Song Name</div>
              <div className="center-bottom-song5-details-movie">
                Movie Name
              </div>
            </div>
          </div>
          <div className="center-bottom-song5-duration">00:00</div>
        </div>
      </div>
    </div>
  );
}
