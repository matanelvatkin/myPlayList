import React, { useContext } from 'react'
import YouTube from 'react-youtube';
import { PopupContext } from '../App';
import "./PopUp.css"

function PopUp() {
    const {videoId,setVideoId} = useContext(PopupContext)
    const opts = {
        height: '5%',
        width: '1000px',
        playerVars: {
          autoplay: 1,
        },
    };

  return (
    <div className='PopUp'>
        {videoId?<YouTube className="playControl" videoId = {videoId} opts={opts}/>:null}
    </div>
  )
}

export default PopUp