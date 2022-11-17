import "./SongCard.css";
import ControlButton from "../../../ControlButton/ControlButton";
function SongCard(props){
    return <div className="card">
            <img src={props.img} alt="songImg" className="imgCard" />
            <div className="cardDitel">
                <div>
                    <span className="songName">
                        {props.title}
                    </span><br />
                </div>
                <div className="disginditel">
                    <div >
                        <span className="songCreacteor">
                            {props.artist}
                        </span> <br />
                        <span className="songTime">
                            {props.timesSong}
                        </span>
                    </div>
                    <div>
                        <ControlButton/>
                    </div>
                </div>
            </div>
        
    </div>
}

export default SongCard