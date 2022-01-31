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
      
      <h2>Manual</h2>
      <video  width="270" height="240" controls autoPlay muted>
        <source src="https://pavantest212.s3.us-east-2.amazonaws.com/multires/hls/360_out.m3u8" type="video/mp4"  />
      </video>
    </div>
  )
}