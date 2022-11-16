import "./SongCard.css";
import ControlButton from "../../../ControlButton/ControlButton";
function SongCard(props){
    return <div className="card">
            <img src="data:image/jpeg;base64,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" alt="songImg" className="imgCard" />
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