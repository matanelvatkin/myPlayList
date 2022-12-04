import React, { useContext } from 'react'
import YouTube from 'react-youtube';
import { PopupContext } from '../App';
import "./PopUp.css"

function PopUp() {
    const {videoId,setVideoId} = useContext(PopupContext)
    const opts = {
        height: '5%',
        width: '800rem',
        playerVars: {
          autoplay: 1,
        },
    };

  return (
    <footer className='PopUp'>
        {videoId?<YouTube className="playControl" videoId = {videoId} opts={opts}/>:null}
    </footer>
  )
}

export default PopUp