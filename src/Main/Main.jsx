import SongList from "./SongList/SongList"
import "./Main.css";
import { Route, Routes} from "react-router";
import UserHomePage from "./UserHomePage/UserHomePage";

function Main(props){
    return <div className="Main">
        <Routes>
            <Route path="/" element={<UserHomePage/>}/>
            <Route path="/songList"   element={<SongList songs ={props.songs}/>}/>
        </Routes>
    </div>
}

export default Main;