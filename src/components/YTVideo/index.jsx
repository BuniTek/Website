import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video video-container">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      width="853" height="480"
      allowFullScreen
    />
  </div>
)
export default Video