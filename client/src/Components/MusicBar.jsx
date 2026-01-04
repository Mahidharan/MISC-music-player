import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import "./musicBar.css"; // Import the CSS file

const MusicPlayer = () => {
  const [played, setPlayed] = useState(0); // State to track current played time
  const [duration, setDuration] = useState(0); // State to track total duration
  const playerRef = useRef(null); // Ref to access the ReactPlayer

  // Helper function to format time in mm:ss
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  return (
    <div className="music-player-container">
      {/* ReactPlayer component to handle audio playback */}
      <ReactPlayer
        ref={playerRef}
        url="path-to-your-music-file.mp3" // Replace with your file path
        playing // Automatically play the track
        onProgress={({ playedSeconds }) => setPlayed(playedSeconds)} // Updates `played` state
        onDuration={(duration) => setDuration(duration)} // Sets the total `duration`
        width="0" // Hides the player UI
        height="0"
        controls={false} // No default controls
      />

      {/* Progress bar */}
      <div className="progress-bar-container">
        <div
          className="played-bar"
          style={{ width: `${(played / duration) * 100}%` }} // Dynamic width based on playback progress
        ></div>
      </div>

      {/* Timer */}
      <div className="timer">
        <span>
          {formatTime(played)} / {formatTime(duration)}
        </span>
      </div>
    </div>
  );
};

export default MusicPlayer;
