import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import YouTube from "react-youtube";
import { PopupContext } from "../App";
import SongControl from "../ControlButton/Songcontrol/SongControl";
import "./PopUp.css";

function PopUp() {
  const { videosId, isPause, numberOfSong } = useContext(PopupContext);
  const [videoControl, setVideoControl] = useState(null);
  const [show, setShow] = useState(false);
  const opts = {
    height: "5%",
    playerVars: {
      autoplay: 1,
    },
  };
  const ready = (e) => {
    setVideoControl(e.target);
  };
  useEffect(() => {
    if (isPause && videoControl) {
      videoControl.pauseVideo();
    } else if (!isPause && videoControl) {
      videoControl.playVideo();
    }
  }, [isPause]);

  return (
    <footer className={show ? "PopUp PopUpShowing" : "PopUp"}>
      {videosId[numberOfSong] ? (
        <div className={"divVideoControl"}>
          <span className="videoButtonControl">
            <SongControl keys={numberOfSong} />
            <input
              type="button"
              value="show video"
              onClick={() => setShow(!show)}
            />
          </span>
          <div
            className={
              show
                ? "videoController videoControllerShowing"
                : "videoController"
            }
          >
            <YouTube
              videoId={videosId[numberOfSong]}
              iframeClassName="youtube"
              onReady={ready}
              opts={opts}
            />
          </div>
        </div>
      ) : null}
    </footer>
  );
}

export default PopUp;
