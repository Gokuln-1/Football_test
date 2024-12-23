// src/pages/YouTubeLink.js
import React from 'react';
import './YouTubeLink.css'; // Optional styling


const YouTubeLink = () => {
  return (
    <div className="youtube-link-container">
      <h2>YouTube Link Page</h2>
      <p>Watch our exciting YouTube video below!</p>

      {/* YouTube Video Embed */}
      <div className="youtube-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"  // Replace this with your own video URL
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* YouTube Link */}
      <div className="youtube-link">
        <h3>Or click here to watch directly:</h3>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"  // Replace with your own link
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch the video on YouTube
        </a>
      </div>
    </div>
  );
};

export default YouTubeLink;
