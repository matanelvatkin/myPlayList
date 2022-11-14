import Header from '../Header/Header';
import Main from "../Main/Main";
import {songs} from "../songs"

function Layout(){
    return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <Main songs={songs}/>
            </div>
        </div>
    )
}

export default Layout