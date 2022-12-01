import playSong from "../../img/play.png"
import pauseSong from "../../img/pause.png"
import nextSong from "../../img/next.png"
import backwardsSong from "../../img/back.png"
import "./SongControl.css"
import { useContext} from "react";
import { PopupContext } from "../../App";

function SongControl(props){
  const {videoId,setVideoId} = useContext(PopupContext)
    return <div className="songControl">
        <input className="backwardsControl" type="image" src={backwardsSong} alt="" onClick={()=>setVideoId(props.previewId)} />
        {!(videoId === props.id)?
        <input className="playControl" type="image" src={playSong} onClick={()=>{setVideoId(props.id)}} alt="" />
        :<input className="playControl" type="image" src={pauseSong} onClick = {()=>{setVideoId(null)}}/>
        }
        <input className="nextControl" type="image" src={nextSong} alt="" onClick={()=>setVideoId(props.nextId)}/>
        
    </div>
}

export default SongControl 