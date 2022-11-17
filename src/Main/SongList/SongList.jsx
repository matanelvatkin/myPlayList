import SongCard from "./SongCard/SongCard";
import "./SongList.css";

function SongList(props){
    return <div className="songList">
        {props.songs.results.map(v=><SongCard title={v.title} img={v.thumbnail.url} timesSong = {v.duration_formatted}/>)}
    </div>
}

export default SongList