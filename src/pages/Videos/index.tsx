import React from "react"
import ReactHlsPlayer from 'react-hls-player';

export const Videos = () => {
  const playerRef = React.useRef<HTMLVideoElement | null>(null);

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>  
    <h2>auto</h2>  
      <div>
        <ReactHlsPlayer
          src="https://pavantest212.s3.us-east-2.amazonaws.com/multires/hls/master.m3u8"
          autoPlay
          controls
          width="640" height="360"
          playerRef={playerRef}
          muted
        />
      </div> 
    </div>
  )
}