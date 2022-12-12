import "./ControlButton.css";
import AddOrRemveToPlaylist from "./AddOrRemveToPlaylist/AddOrRemveToPlaylist";
import SongControl from "./Songcontrol/SongControl";

function ControlButton({ keys }) {
  return (
    <div className="ControlButton">
      <SongControl keys={keys} />
      {/* <AddOrRemveToPlaylist/> */}
    </div>
  );
}

export default ControlButton;
