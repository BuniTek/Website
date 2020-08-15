import React from 'react';
import './index.scss';

const Video = () => (
  <div className="video-container">
    <iframe
      src="https://player.vimeo.com/video/444369368?color=ffffff&title=0&byline=0&portrait=0&badge=0"
      width="640"
      height="360"
      frameBorder="0"
      allow="autoplay; fullscreen"
      allowFullScreen
    />
    <p>
      BuniTek Intro Video
    </p>
  </div>
);
export default Video;
