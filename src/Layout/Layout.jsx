import { useEffect, useState, useRef, useContext } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import axios from "axios";
import { PopupContext } from "../App";

function Layout() {
  const { setNumberOfSong, setVidesoId } = useContext(PopupContext);
  const [searchFilter, setSearchFilter] = useState("אביתר בנאי");
  const [songs, setSongs] = useState({ results: [] });
  const inputSearchValue = useRef("");
  const options = {
    method: "GET",
    url: "https://simple-youtube-search.p.rapidapi.com/search",
    params: { query: "" + searchFilter, safesearch: "false" },
    headers: {
      "X-RapidAPI-Key": "458302a80bmsh65f83ca14b6e60bp12d077jsnc759f59bdd86",
      "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
    },
  };

  const setNewSearchToApi = () => {
    if (inputSearchValue.currnet.value != "") {
      setSearchFilter(inputSearchValue.currnet.value.trim());
      inputSearchValue.currnet.value = "";
    }
  };
  const getValueFromInputSearch = (e) => {
    inputSearchValue.currnet = e.target;
    if (e.key === "Enter") {
      setNewSearchToApi();
    }
  };
  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        console.log(response.data.results);
        setSongs((prev) => response.data);
        setVidesoId((prev) => []);
        setNumberOfSong((prev) => null);
      })
      .catch(function (error) {
        setSearchFilter({
          results: [{ title: "we coudn't find your search" }],
        });
      });
  }, [searchFilter]);

  return (
    <div>
      <div>
        <Header
          getValue={getValueFromInputSearch}
          SearchRequset={setNewSearchToApi}
        />
      </div>
      <div>
        <Main songs={songs} />{" "}
      </div>
    </div>
  );
}

export default Layout;
