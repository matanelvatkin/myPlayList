import playSong from "../../img/play.png";
import pauseSong from "../../img/pause.png";
import nextSong from "../../img/next.png";
import backwardsSong from "../../img/back.png";
import "./SongControl.css";
import { useContext } from "react";
import { PopupContext } from "../../App";

function SongControl(props) {
  const { isPause, setisPause, numberOfSong, setNumberOfSong, videosId } =
    useContext(PopupContext);

  return (
    <div className="songControl">
      <input
        className="backwardsControl"
        type="image"
        src={backwardsSong}
        alt=""
        onClick={() => setNumberOfSong(numberOfSong - 1)}
      />
      {!(videosId[props.keys] === videosId[numberOfSong]) ? (
        <input
          className="playControl"
          type="image"
          src={playSong}
          onClick={() => {
            setNumberOfSong(props.keys);
            setisPause(false);
          }}
          alt=""
        />
      ) : (
        <input
          className="playControl"
          type="image"
          src={isPause ? playSong : pauseSong}
          onClick={() => {
            setisPause(isPause ? false : true);
          }}
        />
      )}
      <input
        className="nextControl"
        type="image"
        src={nextSong}
        alt=""
        onClick={() => {
          setNumberOfSong(numberOfSong + 1);
          setisPause(false);
        }}
      />
    </div>
  );
}

export default SongControl;
