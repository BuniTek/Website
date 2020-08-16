import React from 'react';
import './index.scss';

const Video = () => (
  <div className="intro__video-container">
    <iframe
      src="https://player.vimeo.com/video/448154640?color=ffffff&title=0&byline=0&portrait=0&badge=0"
      width="640"
      height="360"
      frameBorder="0"
      allow="autoplay; fullscreen"
      allowFullScreen
    />
  </div>
);
export default Video;
