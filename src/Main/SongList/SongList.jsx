import SongCard from "./SongCard/SongCard";
import "./SongList.css";

function SongList(props){
    return <div className="songList">
        {props.songs.map(v=><SongCard title={v.title} artist={v.artist} timesSong = {v.duration}/>)}
    </div>
}

export default SongList