import "./ControlButton.css"
import AddOrRemveToPlaylist from "./AddOrRemveToPlaylist/AddOrRemveToPlaylist"
import SongControl from "./Songcontrol/SongControl"

function ControlButton({id,nextId,previewId}){
    return <div className="ControlButton">
        <SongControl id={id} nextId ={nextId} previewId={previewId}/>
        {/* <AddOrRemveToPlaylist/> */}
    </div>
}

export default ControlButton