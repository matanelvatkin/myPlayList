import { useEffect } from "react";
import { useContext } from "react";
import { set } from "react-hook-form";
import { PopupContext } from "../../App";
import SongCard from "./SongCard/SongCard";
import "./SongList.css";

function SongList(props) {
  const results = props.songs.results;
  const { videosId, setVidesoId } = useContext(PopupContext);
  return (
    <div className="songList">
      {results
        ? results.map((v, i, arr) => {
            arr.length > videosId.length
              ? results.map((v) => videosId.push(v.id))
              : console.log("err");
            return (
              <SongCard
                key={i}
                keys={Number(i)}
                title={v.title}
                artist={v.channel.name}
                img={v.thumbnail.url}
                timesSong={v.duration_formatted}
              />
            );
          })
        : null}
    </div>
  );
}

export default SongList;
