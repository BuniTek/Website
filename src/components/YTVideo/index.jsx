import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video-container">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      width="853" height="480"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video