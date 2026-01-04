import React from 'react'
import './footer.css'
import MusicBar from "./MusicBar.jsx"
import VolumeAdjuster from './VolumeAdjuster.jsx'
import previousSong from "../assets/previousSongImage.png"
import pauseImage from "../assets/pause.png"
import nextSong from "../assets/next-track.png"
import redHeart from "../assets/heartRed.png"
import shuffle from "../assets/shuffleWhite.png"
import reverseWhite from "../assets/rotate-reverse-white.png"
import queueWhite from "../assets/queueWhite.png"

export default function Footer() {
  return (
    <div className="footer">
        <div className="footer-song">
            <div className="song-photo-div"></div>
            <div className="song-name-div">
                <div className="song-name">Falling</div>
                <div className="song-author">Trevor Daniel</div>
            </div>
        </div>
        <div className="song-components">
            <div className="left-track">
                <img src={previousSong} alt="previous-track" className="components" />
            </div>
            <div className="playPause">
                <img src={pauseImage} alt="pause" className="components" />
            </div>
            <div className="right-track">
                <img src={nextSong} alt="after-track" className="components" />
            </div>
            <div className="like">
                <img src={redHeart} alt="like" className="components"/>
            </div>

        </div>
        <div className="song-timer">
            
                <MusicBar />
            
        </div>
        <div className="volume">
            
                <VolumeAdjuster />
            
            

        </div>
        <div className="tools">
            <div className="shuffle-icon">
                <img src={shuffle} alt="shuffle" className="toolsIcon" />
            </div>
            <div className="repeat-icon">
                <img src={reverseWhite} alt="reverse" className="toolsIcon" />
            </div>
            <div className="queue-icon">
                <img src={queueWhite} alt="queue" className="toolsIcon" />
            </div>
        </div>
        
    </div>
  )
}
