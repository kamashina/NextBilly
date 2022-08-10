import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import MainContainer from "../component/MainContainer";
import styles from "../styles/Video.module.css";

const Video: React.FC = () => {
  const [url, setUrl] = useState<string>(
    "https://www.youtube.com/watch?v=3BYQ6WmKLeU&t=550s"
  );
  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };
  return (
    <div className={styles.boxvideo}>
      <input
        onChange={handleUrlChange}
        type="text"
        placeholder="Ссылка на видео"
        value={url}
        className={styles.inpurl}
      />
      <div className="video">
        <ReactPlayer
          url={url}
          controls={true}
          width="960px"
          height="503px"
          loop={true}
        />
      </div>
    </div>
  );
};

export default Video;
