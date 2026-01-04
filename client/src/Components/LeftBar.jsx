import React, { Component } from "react";
import "./leftBar.css";
import waveformWhite from "../assets/waveformWhite.png";
import playlistWhite from "../assets/playlistWhite.png";
import statisticsWhite from "../assets/statisticsWhite.png";
import heartWhite from "../assets/heartWhite.png";
import listenLaterWhite from "../assets/listenLaterWhite.png";
import historyWhite from "../assets/historyWhite.png";
import podcastWhite from "../assets/podcastWhite.png";
import redDot from "../assets/redDot.png";
import greenDot from "../assets/greenDot.png";
import yelloveDot from "../assets/yelloveDot.png";
import violetDot from "../assets/violetDot.png";
import plus from "../assets/plus.png";

export class LeftBar extends Component {
  render() {
    return (
      <div className="left-bar">
        <div className="left-bar-one">
          <div className="left-bar-one-one">
            <div className="left-bar-img-div">
              <img
                src={waveformWhite}
                alt="waveformimage"
                className="waveformimage"
              />
            </div>
            <div className="left-bar-one-one-text">Feed</div>
          </div>
          <div className="left-bar-one-two">
            <div className="left-bar-img-div">
              <img
                src={playlistWhite}
                alt="playlist"
                className="playlistimage"
              />
            </div>
            <div className="left-bar-one-two-text">Playlists</div>
          </div>
          <div className="left-bar-one-three">
            <div className="left-bar-img-div">
              <img
                src={statisticsWhite}
                alt="statistics"
                className="statisticsimage"
              />
            </div>
            <div className="left-bar-one-three-text">Statistics</div>
          </div>
        </div>
        <div className="left-bar-two">
          <div className="left-bar-two-header">YOUR MUSIC</div>
          <div className="left-bar-two-one">
            <div className="left-bar-img-div">
              <img src={heartWhite} alt="love" className="heartImage" />
            </div>
            <div className="left-bar-two-one-text">Favourites</div>
          </div>
          <div className="left-bar-two-two">
            <div className="left-bar-img-div">
              <img
                src={listenLaterWhite}
                alt="listenlater"
                className="listenLaterImage"
              />
            </div>
            <div className="left-bar-two-two-text">Listen Later</div>
          </div>
          <div className="left-bar-two-three">
            <div className="left-bar-img-div">
              <img src={historyWhite} alt="history" className="historyImage" />
            </div>
            <div className="left-bar-two-three-text">History</div>
          </div>
          <div className="left-bar-two-four">
            <div className="left-bar-img-div">
              <img src={podcastWhite} alt="podcasts" className="podcastImage" />
            </div>
            <div className="left-bar-two-four-text">Podcasts</div>
          </div>
        </div>
        <div className="left-bar-two">
          <div className="left-bar-two-header">YOUR PLAYLISTS</div>
          <div className="left-bar-two-one">
            <div className="left-bar-img-div">
              <img src={redDot} alt="love" className="heartImage" />
            </div>
            <div className="left-bar-two-one-text">Metal Core</div>
          </div>
          <div className="left-bar-two-two">
            <div className="left-bar-img-div">
              <img
                src={greenDot}
                alt="listenlater"
                className="listenLaterImage"
              />
            </div>
            <div className="left-bar-two-two-text">Electro</div>
          </div>
          <div className="left-bar-two-three">
            <div className="left-bar-img-div">
              <img src={yelloveDot} alt="history" className="historyImage" />
            </div>
            <div className="left-bar-two-three-text">Funk</div>
          </div>
          <div className="left-bar-two-four">
            <div className="left-bar-img-div">
              <img src={violetDot} alt="podcasts" className="podcastImage" />
            </div>
            <div className="left-bar-two-four-text">Disco</div>
          </div>
        </div>
        <div className="left-bar-last">
          <div className="left-bar-last-text">Create New Playlist</div>
          <div className="left-bar-img-div">
            <img src={plus} alt="create play list" className="plusImage" />
          </div>
        </div>
      </div>
    );
  }
}

export default LeftBar;
