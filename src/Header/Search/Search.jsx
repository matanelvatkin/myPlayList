import "./Search.css";

function Search(props){
    return <div className="search">
        <input type="text" onInput={props.filterSearchig} />
    </div>
} 

export default Search