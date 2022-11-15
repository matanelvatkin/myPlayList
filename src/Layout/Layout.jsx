import { useState } from 'react';
import Header from '../Header/Header';
import Main from "../Main/Main";
import {songs} from "../songs"
// import ControlButton from '../ControlButton/ControlButton';

function Layout(){
    const [searchFilter,setSearchFilter] = useState(true);
    const onSearch =(e)=>{
        setSearchFilter(e.target.value)
    }
    let filteredSongsList = songs.filter(v=>v.title.includes(searchFilter)||searchFilter===true)
    return(
        <div>
            <div>
                <Header filterSearchig = {onSearch}/>
            </div>
            <div>
                <Main songs={filteredSongsList} />
            </div>
        </div>
    )
}

export default Layout