import SongList from "./SongList/SongList"
import "./Main.css";

function Main(props){
    return <div className="Main">
        <SongList songs ={props.songs}/>
    </div>
}

export default Main;