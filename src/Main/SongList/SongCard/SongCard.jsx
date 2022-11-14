import "./SongCard.css";

function SongCard(props){
    return <div className="card">
        <img src="" alt="songImg" className="imgCard" />
        <div className="cardDitel">
            <span className="songName">
                {props.title}
            </span><br />
            <span className="songCreacteor">
                {props.artist}
            </span> <br />
            <span className="songTime">
                {props.timesSong}
            </span>
        </div>
    </div>
}

export default SongCard