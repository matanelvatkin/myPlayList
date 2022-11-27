import { useEffect, useState ,useRef} from 'react';
import Header from '../Header/Header';
import Main from "../Main/Main";
import axios from 'axios';


function Layout(){
    const [searchFilter,setSearchFilter] = useState("אביתר בנאי");
    const [songs,setSongs] = useState({results:[]})
    const inputSearchValue = useRef("")
    const options = {
    method: 'GET',
    url: 'https://simple-youtube-search.p.rapidapi.com/search',
    params: {query: ""+searchFilter, safesearch: 'false'},
    headers: {
        'X-RapidAPI-Key': '458302a80bmsh65f83ca14b6e60bp12d077jsnc759f59bdd86',
        'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
    }
    };
    const setNewSearchToApi = ()=>{
        if(inputSearchValue.currnet != ""){
            setSearchFilter((inputSearchValue.currnet).trim().replace(" ","+"))
        }
    }
    const getValueFromInputSearch =(e)=>{
        inputSearchValue.currnet=e.target.value;
        if(e.key==="Enter"){
            setNewSearchToApi()
        }
    }
    useEffect(()=>{
        axios.request(options).then((response)=> {
            console.log(response.data.results);
            setSongs(response.data)
        }).catch(function (error) {
            setSearchFilter({results:[{title:"we coudn't find your search"}]})
        });
    },[searchFilter])

    return(
        <div>
            <div>
                <Header getValue = {getValueFromInputSearch} SearchRequset={setNewSearchToApi}/>
            </div>
            <div>
                <Main songs={songs} />
            </div>
        </div>
    )
}

export default Layout