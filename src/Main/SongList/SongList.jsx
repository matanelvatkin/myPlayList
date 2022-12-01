import SongCard from "./SongCard/SongCard";
import "./SongList.css";

function SongList(props){
    return <div className="songList">
        {props.songs.results?
        props.songs.results.map((v,i)=><SongCard key={i} id={v.id} previewId={i!==0?props.songs.results[i-1].id:v.id}
        nextId={i!==props.songs.results.length-1?props.songs.results[i+1].id:v.id} title={v.title} artist={v.channel.name} img={v.thumbnail.url} timesSong = {v.duration_formatted}/>)
        :null
    }
    </div>
}

export default SongList