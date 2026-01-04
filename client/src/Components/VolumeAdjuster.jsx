import React, { useState } from "react";
import "./volumeAdjuster.css";

const VolumeAdjuster = () => {
  const [volume, setVolume] = useState(50); // Initial volume set to 50

  const handleVolumeChange = (e) => {
    setVolume(e.target.value); // Update volume state
  };

  return (
    <div className="volume-adjuster">
      {/* Speaker Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="speaker-icon"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M7 9v6h4l5 5V4l-5 5H7z" />
      </svg>

      {/* Slider Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
        className="volume-slider"
        // Inline style for dynamic gradient
        style={{
          background: `linear-gradient(to right, #ff6a34 ${volume}%, #444 ${volume}%)`,
        }}
      />
    </div>
  );
};

export default VolumeAdjuster;
