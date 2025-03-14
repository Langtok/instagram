// src/components/VideoPlayer.js
import './VideoPlayer.css';

const VideoPlayer = ({ src }) => (
  <video className="video-player" controls>
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default VideoPlayer;