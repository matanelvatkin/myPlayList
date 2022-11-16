import playSong from "../../img/play.png"
import pauseSong from "../../img/pause.png"
import nextSong from "../../img/next.png"
import backwardsSong from "../../img/back.png"

import "./SongControl.css"
function SongControl(){
    return <div className="songControl">
        <input className="backwardsControl" type="image" src={backwardsSong} alt="" />
        <input className="playControl" type="image" src={playSong} alt="" />
        <input className="nextControl" type="image" src={nextSong} alt="" />
        
    </div>
}

export default SongControl 