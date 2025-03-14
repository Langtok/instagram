// src/components/AudioPlayer.js
import './AudioPlayer.css';

const AudioPlayer = ({ src }) => (
  <audio className="audio-player" controls>
    <source src={src} type="audio/mpeg" />
    Your browser does not support the audio tag.
  </audio>
);

export default AudioPlayer;