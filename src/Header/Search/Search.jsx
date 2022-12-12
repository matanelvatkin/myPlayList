import "./Search.css";

function Search(props) {
  return (
    <div className="search">
      <input type="text" onInput={props.getValue} onKeyDown={props.getValue} />
      <button type="submit" onClick={props.SearchRequset}>
        search
      </button>
    </div>
  );
}

export default Search;
