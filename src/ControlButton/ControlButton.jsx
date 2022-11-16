import "./ControlButton.css"
import AddOrRemveToPlaylist from "./AddOrRemveToPlaylist/AddOrRemveToPlaylist"
import SongControl from "./Songcontrol/SongControl"

function ControlButton(){
    return <div className="ControlButton">
        <SongControl/>
        {/* <AddOrRemveToPlaylist/> */}
    </div>
}

export default ControlButton